import express from "express";
import {
  addProduct,
  popularProducts,
  recommendedProducts,
} from "../controllers/productController.js";

export const productRouter = express.Router();

//ADD PRODUCT API ENDPOINT
productRouter.post("/api/add-product", addProduct);

//POPULAR PRODUCT
productRouter.get("/api/popular-products", popularProducts);
productRouter.get("/api/recommended-products", recommendedProducts);
