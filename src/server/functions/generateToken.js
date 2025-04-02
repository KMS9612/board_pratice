import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();

const generateAccessToken = (email) => {
  const payload = { email };
  const cryptoKey = process.env.CRYPTO_KEY || "jwt-secret-key";

  const token = jwt.sign(payload, cryptoKey, {
    algorithm: "HS256",
    expiresIn: "30m",
  });

  return token;
};

const generateRefreshToken = (email) => {
  const payload = { email };
  const cryptoKey = process.env.CRYPTO_KEY || "jwt-secret-key";

  const refreshToken = jwt.sign(payload, cryptoKey, {
    algorithm: "HS256",
    expiresIn: "30d",
  });

  return refreshToken;
};

export { generateAccessToken, generateRefreshToken };
