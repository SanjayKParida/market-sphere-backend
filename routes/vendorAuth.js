import express from "express";
import { createVendor, signInVendor } from "../controllers/vendorController.js";

export const vendorRouter = express.Router();

//VENDOR SINGUP API ENDPOINT
vendorRouter.post("/api/vendor/signup", createVendor);

//VENDOR SIGNIN API ENDPOINT
vendorRouter.post("/api/vendor/signin", signInVendor);
