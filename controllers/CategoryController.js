import BaseController from './BaseController.js';
import { Category } from '../models/models.js';

class CategoryController extends BaseController {
  constructor() {
    super(Category);
  }
}

export default new CategoryController();
