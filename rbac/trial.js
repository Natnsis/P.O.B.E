import jwt from "jsonwebtoken";

const verify = (req, res, next) => {
  const authHeader = req.header.Authorization;
  const token = authHandler && authHandler.split(" ")[1];

  if (!token) return res.status(401).json({ message: "un authorized user" });

  jwt.verify(token, process.env.SECRET, (err, decoded) => {
    if (err) return res.status(401).json({ message: "error authenticating" });
    req.user = decoded;
    next();
  });
};
