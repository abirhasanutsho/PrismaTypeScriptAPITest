// Import necessary modules
import express from 'express';
import usersRoutes from './src/routes/auth_routes';

const app = express();

app.use(express.json());

app.use("/api",usersRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
