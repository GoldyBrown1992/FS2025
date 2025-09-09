import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'
import { PrismaClient } from '@prisma/client'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2023-10-16'
})

const prisma = new PrismaClient()

export async function POST(req: NextRequest) {
  const body = await req.text()
  const signature = req.headers.get('stripe-signature')!
  
  let event: Stripe.Event
  
  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    )
  } catch (error) {
    console.error('Webhook signature verification failed:', error)
    return NextResponse.json(
      { error: 'Invalid signature' },
      { status: 400 }
    )
  }
  
  try {
    if (event.type === 'checkout.session.completed') {
      const session = event.data.object as Stripe.Checkout.Session
      
      // Update inventory
      const today = new Date()
      today.setHours(0, 0, 0, 0)
      
      await prisma.inventory.update({
        where: { date: today },
        data: {
          boxesSold: {
            increment: 1
          }
        }
      })
      
      // Create or update user and order
      const email = session.customer_email || 'unknown@example.com'
      
      const user = await prisma.user.upsert({
        where: { email },
        update: {},
        create: {
          email,
          name: session.customer_details?.name || 'Customer',
          phone: session.customer_details?.phone || 'Not provided'
        }
      })
      
      await prisma.order.create({
        data: {
          userId: user.id,
          type: session.metadata?.orderType || 'single',
          status: 'completed',
          amount: session.amount_total || 0,
          pickupLocation: 'Newton', // Default, should be collected in form
          stripeSessionId: session.id
        }
      })
    }
    
    return NextResponse.json({ received: true })
  } catch (error) {
    console.error('Webhook processing error:', error)
    return NextResponse.json(
      { error: 'Webhook processing failed' },
      { status: 500 }
    )
  }
}
