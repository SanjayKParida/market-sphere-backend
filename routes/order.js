import express from "express";
import { createOrder, fetchOrders } from "../controllers/orderController.js";

export const orderRouter = express.Router();

//POST ROUTE FOR CREATING ORDERS
orderRouter.post("/api/orders", createOrder);

//GET ROUTE FOR FETCHING ORDERS
orderRouter.get("/api/orders/:buyerId", fetchOrders);
