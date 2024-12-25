import express from "express";
import {
  subCategoryDynamicGet,
  subCategoryGet,
  subCategoryPost,
} from "../controllers/subCategoryController.js";

//INITIALIZING SUBCATEGORY ROUTER
export const subCategoryRouter = express.Router();

//SUBCATEGORY POST API ENDPOINT
subCategoryRouter.post("/api/subcategories", subCategoryPost);

//ALL SUBCATEGORY GET API ENDPOINT
subCategoryRouter.get("/api/subcategories", subCategoryGet);

//SUBCATEGORY GET DYNAMIC API ENDPOINT
subCategoryRouter.get(
  "/api/categories/:categoryName/subcategories",
  subCategoryDynamicGet
);
