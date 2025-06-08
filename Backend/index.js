import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import ChatRoutes from './Routes/ChatRoutes.js';

dotenv.config();

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

app.use('/api', ChatRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
