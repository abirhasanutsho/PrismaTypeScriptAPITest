import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  try {
    const response = await prisma.users_channel.findMany();
    console.log(response);
  } catch (error) {
  } finally {
    async () => {
      await prisma.$disconnect();
    };
  }
}

main();
