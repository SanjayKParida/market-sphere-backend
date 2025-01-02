import express from "express";
import {
  addProduct,
  popularProducts,
  productsByCategory,
  recommendedProducts,
} from "../controllers/productController.js";

export const productRouter = express.Router();

//ADD PRODUCT API ENDPOINT
productRouter.post("/api/add-product", addProduct);

//PRODUCTS BY CATEGORY
productRouter.get("/api/products-by-category/:category", productsByCategory)

//POPULAR PRODUCT
productRouter.get("/api/popular-products", popularProducts);
productRouter.get("/api/recommended-products", recommendedProducts);
