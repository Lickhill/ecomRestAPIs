const Product = require("../models/productModel");
const User = require("../models/userModel");
const Category = require("../models/categoryModel");
const SubCategory = require("../models/subcategoryModel");

const data_count = async (req, res) => {
	try {
		const count_data = [];
		const product_data = await Product.countDocuments();
		const vendor_data = await User.countDocuments({ type: 1 });
		const category_data = await Category.countDocuments();
		const subcategory_data = await SubCategory.countDocuments();

		count_data.push({
			product: product_data,
			vendor: vendor_data,
			category: category_data,
			subcategory: subcategory_data,
		});

		res.status(200).send({
			success: true,
			msg: "Counting data",
			data: count_data,
		});
	} catch (error) {
		res.status(400).send({ success: false, msg: error.message });
	}
};

module.exports = {
	data_count,
};
