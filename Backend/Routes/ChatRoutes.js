import express from 'express';
import { handlePost } from '../Controllers/chatControllers.js';

const router = express.Router();

router.post('/chat', handlePost);

export default router;
