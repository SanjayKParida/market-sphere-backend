import mongoose from "mongoose";

//CREATION OF BANNER SCHEMA
const bannerSchema = mongoose.Schema({
  image: {
    type: String,
    required: true,
  },
});

//EXPORTING/CREATING BANNER COLLECTION
export const Banner = mongoose.model("Banner", bannerSchema);
