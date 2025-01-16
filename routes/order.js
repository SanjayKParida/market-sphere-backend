import express from "express";
import {
  createOrder,
  deleteOrders,
  fetchBuyerOrders,
  fetchVendorOrders,
  updatedStatusProcessing,
  updateStatusDelivered,
} from "../controllers/orderController.js";

export const orderRouter = express.Router();

//POST ROUTE FOR CREATING ORDERS
orderRouter.post("/api/orders", createOrder);

//GET ROUTE FOR FETCHING ORDERS BY BUYER ID
orderRouter.get("/api/orders/:buyerId", fetchBuyerOrders);

//DELETE ROUTE FOR DELETING ORDERS
orderRouter.delete("/api/orders/:id", deleteOrders);

//GET ROUTE FOR FETCHING ORDERS BY VENDOR ID
orderRouter.get("/api/orders/vendors/:vendorId", fetchVendorOrders);

//PATCH ROUTE TO UPDATE DELIVERY STATUS
orderRouter.patch("/api/orders/:id/delivered", updateStatusDelivered);
orderRouter.patch("/api/orders/:id/processing", updatedStatusProcessing);
