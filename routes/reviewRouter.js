import { Router } from 'express';
import reviewController from '../controllers/ReviewController.js';

const router = Router();

router.get('/', reviewController.getAll);
router.get('/:id', reviewController.getOne);
router.post('/', reviewController.create);
router.put('/:id', reviewController.update);
router.delete('/:id', reviewController.delete);

export default router;
