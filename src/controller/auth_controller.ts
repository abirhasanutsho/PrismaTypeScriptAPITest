// controllers/usersController.ts
import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getUsers = async (req: Request, res: Response) => {
  try {
    const usersChannels = await prisma.users_channel.findMany();
    res.json(usersChannels);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const createUser = async (req: Request, res: Response) => {
  try {
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
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
