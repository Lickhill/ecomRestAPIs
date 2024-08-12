const mongoose = require("mongoose");

const subCategorySchema = mongoose.Schema({
	category_id: {
		type: String,
		required: true,
	},
	subcategory: {
		type: String,
		required: true,
	},
});

module.exports = mongoose.model("SubCategory", subCategorySchema);
