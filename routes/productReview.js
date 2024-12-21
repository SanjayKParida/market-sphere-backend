import express from "express";
import { productReviewPost, productReviewGet } from "../controllers/productReviewController.js";

//INITIALIZING ROUTER
export const productReviewRouter = express.Router();

//PRODUCT REVIEW POST ROUTE
productReviewRouter.post("/api/product-review", productReviewPost);

//PRODUCT REVIEW GET ROUTE
productReviewRouter.get("/api/reviews", productReviewGet);
