import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2023-10-16'
})

export async function POST(req: NextRequest) {
  try {
    const { type } = await req.json()
    
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'
    
    let sessionConfig: Stripe.Checkout.SessionCreateParams = {
      payment_method_types: ['card'],
      success_url: `${baseUrl}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${baseUrl}/cancel`,
      metadata: {
        orderType: type
      }
    }
    
    if (type === 'single') {
      sessionConfig.line_items = [{
        price_data: {
          currency: 'usd',
          product_data: {
            name: 'FuelBox - Single Day',
            description: '100g protein, 1200 calories, perfectly balanced'
          },
          unit_amount: 2000 // $20.00
        },
        quantity: 1
      }]
      sessionConfig.mode = 'payment'
    } else {
      sessionConfig.line_items = [{
        price_data: {
          currency: 'usd',
          product_data: {
            name: 'FuelBox Monthly Subscription',
            description: '25 boxes per month - Save $100!'
          },
          recurring: {
            interval: 'month'
          },
          unit_amount: 49999 // $499.99
        },
        quantity: 1
      }]
      sessionConfig.mode = 'subscription'
    }
    
    const session = await stripe.checkout.sessions.create(sessionConfig)
    
    return NextResponse.json({ url: session.url })
  } catch (error) {
    console.error('Checkout error:', error)
    return NextResponse.json(
      { error: 'Failed to create checkout session' },
      { status: 500 }
    )
  }
}
