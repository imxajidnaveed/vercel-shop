import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
dotenv.config();

import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js';
import userRoutes from './routes/userRoutes.js'
const port=process.env.PORT || 5000;

connectDB();
const app=express();

//// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());


app.get('/',(req,res)=>{

    res.send('API is runnnnnnnnnnnnn');
});
app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes); // when i add these lines it


app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log('Server running on port ${port}'));