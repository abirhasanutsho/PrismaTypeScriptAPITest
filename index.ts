// Import necessary modules
import express, { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';


const prisma = new PrismaClient();


const app = express();

app.use(express.json());


app.get('/users', async (req: Request, res: Response) => {
  const usersChannels = await prisma.users_channel.findMany();
  res.json(usersChannels);
});

app.post('/createuser', async (req: Request, res: Response) => {
  const { name, description, link, subscribers } = req.body;
  const newUserChannel = await prisma.users_channel.create({
    data: {
      name,
      description,
      link,
      subscribers,
    },
  });
  res.json(newUserChannel);
});


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
