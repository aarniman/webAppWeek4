import express from 'express';
import catRouter from './routes/cat-router.js';
import userRouter from './routes/user-router.js';

// eslint-disable-next-line new-cap
const router = express.Router();

router.use('/cat', catRouter);
router.use('/user', userRouter);

export default router;
