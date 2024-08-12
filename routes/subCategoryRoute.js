const express = require("express");
const subcategory_route = express();

const bodyParser = require("body-parser");

subcategory_route.use(bodyParser.json());
subcategory_route.use(bodyParser.urlencoded({ extended: true }));

const sub_category = require("../controllers/subCategoryController");
const auth = require("../middleware/auth");

subcategory_route.post(
	"/create-subcategory",
	auth,
	sub_category.create_subcategory
);

module.exports = subcategory_route;
