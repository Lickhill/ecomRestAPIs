const express = require("express");
const product_route = express();

const bodyParser = require("body-parser");
product_route.use(bodyParser.json());
product_route.use(bodyParser.urlencoded({ extended: true }));

const multer = require("multer");
const path = require("path");

product_route.use(express.static("public"));

const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(
			null,
			path.join(__dirname, "../public/productImages"),
			function (err, success) {
				if (err) {
					throw err;
				}
			}
		);
	},
	filename: function (res, file, cb) {
		const name = Date.now() + "-" + file.originalname;
		cb(null, name, function (err, success) {
			if (err) {
				throw err;
			}
		});
	},
});

const upload = multer({ storage: storage });
const auth = require("../middleware/auth");

const product_controller = require("../controllers/productController");

product_route.post(
	"/add-product",
	upload.array("images"),
	auth,
	product_controller.add_product
);

product_route.get("/get-products", auth, product_controller.get_products);
product_route.get("/search-product", auth, product_controller.search_product);

module.exports = product_route;
