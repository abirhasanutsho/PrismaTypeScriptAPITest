// routes/usersRoutes.ts
import express from 'express';
import { getUsers, createUser } from '../controller/auth_controller';

const router = express.Router();

router.get('/users', getUsers);
router.post('/createuser', createUser);

export default router;
