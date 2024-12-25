import { Category } from "../models/category.js";

//CATEGORY POST API ENDPOINT
export const categoryPost = async (req, res) => {
  try {
    const { name, image, banner } = req.body;
    const category = new Category({ name, image, banner });
    await category.save();
    res.status(201).send(category);
  } catch (error) {
    res.send(500).json({ message: error.message });
  }
};

//CATEGORY GET API ENDPOINT
export const categoryGet = async (req, res) => {
  try {
    const categories = await Category.find();
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
