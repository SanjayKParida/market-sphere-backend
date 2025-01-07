import { Order } from "../models/order.js";

export const createOrder = async (req, res) => {
  try {
    const {
      fullName,
      email,
      state,
      city,
      locality,
      productName,
      productPrice,
      quantity,
      category,
      image,
      vendorId,
      buyerId,
    } = req.body;
    const createdAt = new Date().getMilliseconds();
    //CREATE NEW ORDER INSTANCE FROM THE  EXTRACTED DATA FROM THE REQUEST
    const order = new Order({
      fullName,
      email,
      state,
      city,
      locality,
      productName,
      productPrice,
      quantity,
      category,
      image,
      vendorId,
      buyerId,
      createdAt,
    });
    await order.save();
    return res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const fetchOrders = async (req, res) => {
  try {
    //EXTRACT THE BUYER ID FROM THE REQUEST PARAMETER
    const { buyerId } = req.params;
    //FIND ALL THE ORDERS IN THE DATABASE THAT MATCHES THE BUYER ID
    const orders = await Order.find({ buyerId });
    //IF NO ORDERS FOUND RETURN 404 STATUS
    if (orders.length == 0) {
      return res
        .status(404)
        .json({ message: "No Orders found for this buyer." });
    } else {
      return res.status(200).json(orders);
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
