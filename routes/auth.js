import express from "express";
import {
  createUser,
  signInUser,
  updateUserAddress,
} from "../controllers/authController.js";

//CREATING INSTANCE OF AUTH ROUTER
export const authRouter = express.Router();

//SINGUP API ENDPOINT
authRouter.post("/api/signup", createUser);

//SIGNIN API ENDPOINT
authRouter.post("/api/signin", signInUser);

//PUT ROUTE FOR UPDATING USER'S STATE, CITY AND LOCALITY
authRouter.put("/api/users/:id", updateUserAddress);
