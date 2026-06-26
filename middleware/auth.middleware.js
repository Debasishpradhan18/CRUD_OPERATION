const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
    try{
        const authorization = req.headers.authorization;
     if (!authorization) {
        return res.status(401).send("Unauthorized");
    }

    const token = authorization.split(" ")[1];
    const decoded = jwt.verify(
            token,
            process.env.JWT_SECRET
        );

        req.user = decoded;

        next();
    }
    

     catch (error) {
        return res.status(401).send("Invalid Token");
    }
};



module.exports = authMiddleware;
