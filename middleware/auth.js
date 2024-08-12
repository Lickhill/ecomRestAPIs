const jwt = require("jsonwebtoken");
const config = require("../config/config");

const verifyToken = async (req, res, next) => {
	let token =
		req.body.token || req.query.token || req.headers["authorization"];

	if (!token) {
		return res.status(401).send({
			success: false,
			msg: "A token is required for authentication",
		});
	}

	// Remove 'Bearer ' if present
	if (token.startsWith("Bearer ")) {
		token = token.slice(7);
	}

	try {
		const decoded = jwt.verify(token, config.secret_jwt);
		req.user = decoded;
		next();
	} catch (error) {
		return res.status(401).send({
			success: false,
			msg: "Invalid Token",
		});
	}
};

module.exports = verifyToken;
