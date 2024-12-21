import { ProductReview } from "../models/productReview.js";

//PRODUCT REVIEW POST API FUNCTION
export const productReviewPost = async (req, res) => {
  try {
    const { buyerId, email, fullName, productId, rating, review } = req.body;
    const reviews = new ProductReview({
      buyerId,
      email,
      fullName,
      productId,
      rating,
      review,
    });
    await reviews.save();
    res.status(201).send(reviews);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//PRODUCT REVIEW GET API FUNCTION
export const productReviewGet = async (req, res) => {
  try {
    const reviews = await ProductReview.find();
    res.status(200).json(reviews);
  } catch (error) {
    res.send(500).json({ message: error.message });
  }
};
