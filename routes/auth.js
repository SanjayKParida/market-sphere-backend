import express from 'express';
import { createUser, signInUser } from '../controllers/authController.js';

//CREATING INSTANCE OF AUTH ROUTER
export const authRouter = express.Router(); 

//SINGUP API ENDPOINT
authRouter.post("/api/signup", createUser);

//SIGNIN API ENDPOINT
authRouter.post("/api/signin", signInUser)