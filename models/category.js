import mongoose from "mongoose";

//CREATING CATEGORY SCHEMA
const categorySchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  image: {
    type: String,
    required: true,
  },

  banner: {
    type: String,
    required: true,
  },
});

//EXPORTING/CREATING CATEGORY COLLECTION
export const Category = mongoose.model("Category", categorySchema);
