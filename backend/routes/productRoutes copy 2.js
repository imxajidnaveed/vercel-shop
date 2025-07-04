import express from 'express';
import Product from '../models/productModel.js';
import asyncHandler from '../middleware/asyncHandler.js';
const router = express.Router();

router.get('/', asyncHandler(async(req, res) =>{
  const products = await Product.find({});
  
  res.json(products);
 }));

 router.get('/:id', asyncHandler(async(req, res) => {
  const product = await Product.findById(req.params.id);
  if (product){
    return res.json(product);
    } else{ 
    res.status(404);
    throw new Error('Resourse not found');
    }
 })
);
 
export default router;
