import { Product } from "../models/product.js";

export const addProduct = async (req, res) => {
  try {
    const {
      productName,
      productPrice,
      quantity,
      description,
      category,
      vendorId,
      fullName,
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
      vendorId,
      fullName,
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
      res.status(200).json(product);
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

export const productsByCategory = async (req, res) => {
  try {
    const { category } = req.params;
    const products = await Product.find({ category, popular: true });
    if (!products || products.length == 0) {
      return res.status(404).json({ message: "Products not found" });
    } else {
      return res.status(200).json(products);
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
