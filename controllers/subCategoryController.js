import { subCategory } from "../models/subCategory.js";

//SUBCATEGORY POST API FUNCTION
export const subCategoryPost = async (req, res) => {
  try {
    const { categoryId, categoryName, image, subCategoryName } = req.body;
    const subcategory = new subCategory({
      categoryId,
      categoryName,
      image,
      subCategoryName,
    });
    await subcategory.save();
    res.status(201).send(subcategory);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//SUBCATEGORY GET API ENDPOINT
export const subCategoryGet = async (req, res) => {
  try {
    const { categoryName } = req.params;
    const subcategories = await subCategory.find({
      categoryName: categoryName,
    });

    if (!subcategories || subcategories.length == 0) {
      res.status(404).json({ message: "Subcategories not found!" });
    } else {
      res.status(200).json({ subcategories });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
