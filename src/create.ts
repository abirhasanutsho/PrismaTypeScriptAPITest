import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  try {
    const data = [
      {
        name: "Abir Hasan Utsho",
        description: "I am Node js Developer",
        subscribers: 20,
        link: "http://youtube.com",
      },
      {
        name: "Abir",
        description: "I am Full Stack Developer",
        subscribers: 30,
        link: "http://facebook.com",
      },
    ];

    const dataObject = {
      name: "Abir Haasan",
      description: "I am Ios Developer",
      subscribers: 40,
      link: "http://instagram.com",
    };

    const res = await prisma.users_channel.create({
      data: dataObject,
    });
    console.log(res);
  } catch (error) {
    console.log(error);
  } finally {
    async () => {
      await prisma.$disconnect();
    };
  }
}

main();
