import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const generateTokens = (userData) => {
  const accesstoken = jwt.sign(userData, process.env.ACCESS_TOKEN_SECRET);
  const refreshtoken = jwt.sign(userData, process.env.REFRESH_TOKEN_SECRET);
  return { accesstoken, refreshtoken };
};

export default generateTokens;
