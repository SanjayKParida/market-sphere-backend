import mongoose from "mongoose";

//CREATION OF SUB-CATEGORY SCHEMA
const subCategorySchema = mongoose.Schema({
  categoryId: {
    type: String,
    required: true,
  },
  categoryName: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  subCategoryName: {
    type: String,
    required: true,
  },
});

//EXPORTING AND CREATING SUBCATEGORY COLLECTION
export const subCategory = mongoose.model("SubCategory", subCategorySchema);
