import { Vendor } from "../models/vendor.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

//VENDOR SIGNUP FUNCTION
export const createVendor = async (req, res) => {
  try {
    const { fullName, email, password } = req.body;
    const exisitingEmail = await Vendor.findOne({ email });
    if (exisitingEmail) {
      return res
        .status(400)
        .json({ message: "Vendor with same email already exixsts." });
    } else {
      //GENERATING SALT WITH COST FACTOR
      const salt = await bcrypt.genSalt(10);
      //HASING PASSWORD
      const hashedPassword = await bcrypt.hash(password, salt);
      let vendor = new Vendor({
        email,
        password: hashedPassword,
        fullName,
      });
      vendor = await vendor.save();
      res.json({ vendor });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//VENDOR SIGNIN FUNCTION
export const signInVendor = async (req, res) => {
  try {
    const { email, password } = req.body;
    const foundVendor = await Vendor.findOne({ email });
    if (!foundVendor) {
      res.status(400).json({ message: "Vendor not found with the email" });
    } else {
      const isMatched = await bcrypt.compare(password, foundVendor.password);
      if (!isMatched) {
        return res.status(400).json({ message: "Incorrect password" });
      } else {
        const token = jwt.sign({ id: foundVendor._id }, "passwordKey");

        //REMOVE SENSITIVE DATA
        const { password, ...vendorWithoutPassword } = foundVendor._doc;

        //SEND RESPONSE
        res.json({
          token,
          vendor: vendorWithoutPassword,
        });
      }
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
