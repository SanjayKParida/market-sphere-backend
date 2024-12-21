import express from "express";
import {
  subCategoryGet,
  subCategoryPost,
} from "../controllers/subCategoryController.js";

//INITIALIZING SUBCATEGORY ROUTER
export const subCategoryRouter = express.Router();

//SUBCATEGORY POST API ENDPOINT
subCategoryRouter.post("/api/subcategories", subCategoryPost);

//SUBCATEGORY GET API ENDPOINT
subCategoryRouter.get("/api/categories/:categoryName/subcategories", subCategoryGet);
