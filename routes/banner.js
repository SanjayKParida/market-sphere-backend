import express from "express";
import { bannerPost, bannerGet } from "../controllers/bannerController.js";

//CREATING INSTANCE OF BANNER ROUTER
export const bannerRouter = express.Router();

//BANNER POST API ENDPOINT
bannerRouter.post("/api/banner", bannerPost);

//BANNER GET API ENDPOINT
bannerRouter.get("/api/banner", bannerGet);
