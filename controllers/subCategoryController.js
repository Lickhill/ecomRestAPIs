const SubCategory = require("../models/subcategoryModel");
const create_subcategory = async (req, res) => {
	try {
		const check_sub = await SubCategory.find({
			category_id: req.body.category_id,
		});
		if (check_sub.length > 0) {
			let checking = false;
			for (let i = 0; i < check_sub.length; i++) {
				if (
					check_sub[i]["subcategory"].toLowerCase() ===
					req.body.subcategory.toLowerCase()
				) {
					checking = true;
					break;
				}
			}
			if (checking === false) {
				const subCategory = new SubCategory({
					category_id: req.body.category_id,
					subcategory: req.body.subcategory,
				});

				const sub_cat_data = await subCategory.save();
				res.status(200).send({
					success: true,
					msg: "SubCategoryDetails",
					data: sub_cat_data,
				});
			} else {
				res.status(200).send({
					success: true,
					msg: "This Subcategory is already present in the list",
				});
			}
		} else {
			const subCategory = new SubCategory({
				category_id: req.body.category_id,
				subcategory: req.body.subcategory,
			});

			const sub_cat_data = await subCategory.save();
		}
	} catch (error) {
		res.status(400).send({ success: false, msg: error.message });
	}
};
module.exports = {
	create_subcategory,
};
