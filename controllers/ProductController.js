import BaseController from './BaseController.js';
import { Product, Category } from '../models/models.js';

class ProductController extends BaseController {
  constructor() {
    super(Product, [Category]);
  }
}

export default new ProductController();
