import mongoose from 'mongoose'
import dotenv from 'dotenv'

//IMPORTING ENVIRONMENT CONFIGS
dotenv.config()

//DATABASE CONNECTION
export const connectDb = () => {
    mongoose.connect(process.env.mongoDbUrl).then(()=> console.log('connection successfull')).catch((err)=> console.log('error'))
}