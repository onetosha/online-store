import BaseController from './BaseController.js';
import { Review } from '../models/models.js';

class ReviewController extends BaseController {
  constructor() {
    super(Review);
  }
}

export default new ReviewController();
