import { Router } from 'express';
import * as bookingsController from '../controllers/bookings.controller.js';

const router = Router();

router.get('/', bookingsController.getAllBookings);
router.get('/:id', bookingsController.getBookingById);
router.post('/', bookingsController.createBooking);
router.put('/:id', bookingsController.updateBooking);
router.delete('/:id', bookingsController.deleteBooking);

export default router;
