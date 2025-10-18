import jwt from "jsonwebtoken";

const verify = (req, res, next) => {
  const authHeader = req.headers.Authorization;
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) return res.status(401).json({ message: "no token provided" });

  jwt.verify(token, process.env.TOKEN_SECRET, (err, decoded) => {
    if (err) return res.status(403).json({ message: "invalid token" });
    req.user = decoded;
    next();
  });
};

/*
    handling based on role

    if(req.user.role !== "admin") return res.status(403).send("access denied");
*/


/*
    front end sends token through headers in authorization

    fetch("/api/posts", {
        method:"POST",
        headers: {
            Authorization: `Bearer ${local saved token}`
        }
    })
*/

export default verify;
