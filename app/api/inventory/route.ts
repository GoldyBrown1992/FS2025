import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET() {
  try {
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    
    let inventory = await prisma.inventory.findUnique({
      where: { date: today }
    })
    
    if (!inventory) {
      inventory = await prisma.inventory.create({
        data: {
          date: today,
          boxesAvailable: 20,
          boxesSold: 0
        }
      })
    }
    
    const available = inventory.boxesAvailable - inventory.boxesSold
    
    return NextResponse.json({
      available: Math.max(0, available),
      total: inventory.boxesAvailable,
      sold: inventory.boxesSold
    })
  } catch (error) {
    console.error('Inventory error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch inventory' },
      { status: 500 }
    )
  }
}
