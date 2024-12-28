import mongoose, { mongo } from "mongoose";

//CREATION OF VENDOR SCHEMA
const vendorSchema = mongoose.Schema({
  fullName: {
    type: String,
    required: true,
    trim: true,
  },

  email: {
    type: String,
    required: true,
    trim: true,
    validate: {
      validator: (value) => {
        const result =
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return result.test(value);
      },
      message: "Please enter a valid email address",
    },
  },

  state: {
    type: String,
    default: "",
  },
  city: {
    type: String,
    default: "",
  },
  locality: {
    type: String,
    default: "",
  },
  role: {
    type: String,
    default: "vendor",
  },

  password: {
    type: String,
    required: true,
    validate: {
      validator: (value) => {
        return value.length >= 8;
      },
      message: "Password must be atleast 8 characters long.",
    },
  },
});

//EXPORTING/CREATING VENDOR COLLECTION
export const Vendor = mongoose.model("Vendor", vendorSchema);
