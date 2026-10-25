import BaseController from './BaseController.js';
import { Order, OrderItem } from '../models/models.js';

class OrderController extends BaseController {
  constructor() {
    super(Order, [OrderItem]);
  }
}

export default new OrderController();
