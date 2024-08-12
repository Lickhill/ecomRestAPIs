const express = require("express");
const app = express();

const mongoose = require("mongoose");

mongoose
	.connect("mongodb://localhost:27017/food")
	.then(() => {
		console.log("Successfully connected to MongoDB");
	})
	.catch((error) => {
		console.error("Error connecting to MongoDB:", error);
	});

const user_routes = require("./routes/userRoute");
app.use("/api", user_routes);

const store_routes = require("./routes/storeRoute");
app.use("/api", store_routes);

const category_route = require("./routes/categoryRoutes");
app.use("/api", category_route);

const subcategory_route = require("./routes/subCategoryRoute");
app.use("/api", subcategory_route);

const product_route = require("./routes/productRoute");
app.use("/api", product_route);

const common_route = require("./routes/commonRoute");
app.use("/api", common_route);

const cart_route = require("./routes/cartRoute");
app.use("/api", cart_route);

app.listen(3000, function () {
	console.log("server is up and running");
});
