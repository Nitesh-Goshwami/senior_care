import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import errorHandler from './middleware/error.js';

import authRoutes from './routes/auth.routes.js';
import productsRoutes from './routes/products.routes.js';
import cartRoutes from './routes/cart.routes.js';
import ordersRoutes from './routes/orders.routes.js';
import bookingsRoutes from './routes/bookings.routes.js';

// Load env vars
dotenv.config();

// Connect to DB
connectDB();

const app = express();

// Body parser
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/products', productsRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/orders', ordersRoutes);
app.use('/api/bookings', bookingsRoutes);

// Error handler
app.use(errorHandler);

export default app;
