import { Product } from "../models/product.js";

export const addProduct = async (req, res) => {
  try {
    const {
      productName,
      productPrice,
      quantity,
      description,
      category,
      subCategory,
      images,
    } = req.body;
    const product = new Product({
      productName,
      productPrice,
      quantity,
      description,
      category,
      subCategory,
      images,
    });
    await product.save();
    res.status(201).send(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const popularProducts = async (req, res) => {
  try {
    const product = await Product.find({ popular: true });
    if (!product || product.length == 0) {
      res.status(404).json({ message: "Popular products not found!" });
    } else {
      res.status(200).json({ product });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const recommendedProducts = async (req, res) => {
  try {
    const product = await Product.find({ recommended: true });
    if (!product || product.length == 0) {
      res.status(404).json({ message: "Recommended products not found!" });
    } else {
      res.status(200).json({ product });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
