import { Router } from 'express';
import * as cartController from '../controllers/cart.controller.js';

const router = Router();

router.get('/', cartController.getCart);
router.post('/add', cartController.addToCart);
router.post('/remove', cartController.removeFromCart);

export default router;
