import express from 'express';
import Product from '../models/productModel.js';
import asyncHandler from '../middleware/asyncHandler.js';
const router = express.Router();

const getProduct= asyncHandler(async(req, res) =>{
  const products = await Product.find({});
  
  res.json(products);
 });

 const getProductById= asyncHandler(async(req, res) => {
  const product = await Product.findById(req.params.id);
  if (product){
    return res.json(product);
    } else{ 
    res.status(404);
    throw new Error('Resourse not found');
    }
 })
;
export {getProduct, getProductById};
