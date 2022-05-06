import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()

async function run() {
const entry = await prisma.entry.create({
  data: {
    value: '934310062234567898765456789098765456789034343600000.345678'
  }
})

console.log(entry)
}

run()