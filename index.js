import express from "express";
import { connectDb } from "./db/db.js";
import dotenv from "dotenv";
import { authRouter } from "./routes/auth.js";
import { bannerRouter } from "./routes/banner.js";
import { categoryRouter } from "./routes/category.js";
import { subCategoryRouter } from "./routes/subCategory.js";
import { productRouter } from "./routes/product.js";
import cors from "cors";
import { productReviewRouter } from "./routes/productReview.js";
import { vendorRouter } from "./routes/vendorAuth.js";
import { orderRouter } from "./routes/order.js";

//IMPORTING ENVIRONMENTAL CONFIGS
dotenv.config();

//EXPRESS APP INITIALIZATION
const app = express();

//DEFINING PORT
const PORT = process.env.PORT || 5000;

//TO HANDLE JSON SENT BY HTTP REQUEST
app.use(express.json());

//ENABLING CORS
app.use(cors());

//USING AUTH ROUTER
app.use(authRouter);

//USING BANNER ROUTER
app.use(bannerRouter);

//USING CATEGORY ROUTER
app.use(categoryRouter);

//USING SUBCATEGORY ROUTER
app.use(subCategoryRouter);

//USING PRODUCT ROUTER
app.use(productRouter);

//USING PRODUCT REVIEW ROUTER
app.use(productReviewRouter);

//USING VENDOR ROUTER
app.use(vendorRouter);

//USING ORDER ROUTER
app.use(orderRouter);

//DATABASE CONNECTION
connectDb();

//SETTING UP PORTS TO LISTEN
app.listen(PORT, "0.0.0.0", () => {
  console.log(`server is running on ${PORT}`);
});
