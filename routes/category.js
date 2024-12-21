import express from "express";
import {
  categoryGet,
  categoryPost,
} from "../controllers/categoryController.js";

//CREATING INSTANCE OF CATEGORY ROUTER
export const categoryRouter = express.Router();

//CATEGORY POST API ENDPOINT
categoryRouter.post("/api/categories", categoryPost);

//CATEGORY GET API REQUEST
categoryRouter.get("/api/categories", categoryGet);
