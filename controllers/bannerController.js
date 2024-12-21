import { Banner } from "../models/banner.js";

//BANNER POST FUNCTION
export const bannerPost = async (req, res) => {
  try {
    const { image } = req.body;
    const banner = new Banner({ image });
    await banner.save();
    return res.status(201).send(banner);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

//BANNER GET FUNCTION
export const bannerGet = async (req, res) => {
  try {
    const banners = await Banner.find();
    return res.status(200).send(banners);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
