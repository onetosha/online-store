import { Router } from 'express';
import orderItemController from '../controllers/OrderItemController.js';

const router = Router();

router.get('/', orderItemController.getAll);
router.get('/:id', orderItemController.getOne);
router.post('/', orderItemController.create);
router.put('/:id', orderItemController.update);
router.delete('/:id', orderItemController.delete);

export default router;
