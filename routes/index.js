import { Router } from 'express';
import userRouter from './userRouter.js';
import categoryRouter from './categoryRouter.js';
import productRouter from './productRouter.js';
import reviewRouter from './reviewRouter.js';
import orderRouter from './orderRouter.js';
import orderItemRouter from './orderItemRouter.js';

const router = Router();

router.use('/users', userRouter);
router.use('/categories', categoryRouter);
router.use('/products', productRouter);
router.use('/reviews', reviewRouter);
router.use('/orders', orderRouter);
router.use('/order-items', orderItemRouter);

export default router;
