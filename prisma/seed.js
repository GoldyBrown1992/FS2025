const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function main() {
  // Create today's inventory
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  
  await prisma.inventory.upsert({
    where: { date: today },
    update: {},
    create: {
      date: today,
      boxesAvailable: 20,
      boxesSold: 0
    }
  })
  
  console.log('Database seeded!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
