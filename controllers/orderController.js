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

export const fetchBuyerOrders = async (req, res) => {
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

export const deleteOrders = async (req, res) => {
  try {
    //EXTRACT THE ID FROM THE REQUEST TO DELETE
    const { id } = req.params;
    //FIND AND DELTE ORDER FROM DATABASE USING THE EXTRACTED ID
    const deletedOrder = await Order.findByIdAndDelete(id);
    //CHECK IF AN ORDER IS FOUND AND DELETED
    if (!deletedOrder) {
      //IF NO ORDER IS FOUND BY ID RETURN 404
      res.status(404).json({ message: "Order not found" });
    } else {
      //IF ORDER WAS FOUND AND DELETED
      res.status(200).json({ message: "Order deleted successfully" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const fetchVendorOrders = async (req, res) => {
  try {
    //EXTRACT THE BUYER ID FROM THE REQUEST PARAMETER
    const { vendorId } = req.params;
    //FIND ALL THE ORDERS IN THE DATABASE THAT MATCHES THE BUYER ID
    const orders = await Order.find({ vendorId });
    //IF NO ORDERS FOUND RETURN 404 STATUS
    if (orders.length == 0) {
      return res
        .status(404)
        .json({ message: "No Orders found for this vendor." });
    } else {
      return res.status(200).json(orders);
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateStatusDelivered = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedOrder = await Order.findByIdAndUpdate(
      id,
      { delivered: true },
      { new: true }
    );
    if (!updatedOrder) {
      res.status(404).json({ message: "Order not found" });
    } else {
      return res.status(200).json(updatedOrder);
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updatedStatusProcessing = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedOrder = await Order.findByIdAndUpdate(
      id,
      { processing: false },
      { new: true }
    );
    if (!updatedOrder) {
      res.status(404).json({ message: "Order not found" });
    } else {
      return res.status(200).json(updatedOrder);
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
