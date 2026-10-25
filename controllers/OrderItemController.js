import BaseController from './BaseController.js';
import { OrderItem } from '../models/models.js';

class OrderItemController extends BaseController {
  constructor() {
    super(OrderItem);
  }
}

export default new OrderItemController();
