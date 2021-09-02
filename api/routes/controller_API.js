/**
 * controller_API.js
 * @author : Revel Jean-Baptiste
 * @version : 1.0
 */

//import of the librairie used
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var mysql = require('mysql');

router.use(bodyParser.urlencoded({ extended: true }));

//mysql local database connector
const db = mysql.createPool({
	host: "localhost",
	user: "root",
	password: "root",
	database: "crud_db"
});

//route to get all information
router.get("/get", function (req, res) {
	const get_sql = "SELECT * from items";
	db.query(get_sql, (err, result) => {
		res.send(result);
	//	console.log("Items is correctly get");
	
	});	
});

//route to delete an item identify by the label
router.delete("/delete/:labelDelete", function (req, res) {
	const delete_sql = "DELETE FROM items WHERE label = ?";
	const label = req.params.labelDelete;
	db.query(delete_sql, label,(err, result) => {
		console.log(result);
		console.log(err);
	});
});

//route to upadte an item in the db identify by the label
router.put("/update", function (req, res) {
	
	const label = req.body.label;
	const description = req.body.description;
	const price = req.body.price;
	const category = req.body.category;
	console.log(category);
	const image = req.body.image;

	const update_sql = "UPDATE items SET description = ?, price = ?, category = ?, image = ? WHERE label = ?";
	db.query(update_sql, [description, price, category, image, label], (err, result) => {
		console.log(result);
		console.log(err);
	});
});

//route to add a new item in the db 
router.post("/insert", function (req, res) {
	const label = req.body.label;
	const description = req.body.description;
	const price = req.body.price;
	const category = req.body.category;
	const image = req.body.image;

	if (price == '') price = 0;

	const insert_sql = "INSERT INTO items (label, description, price, category, image) VALUES (?, ?, ?, ?, ?)";
	db.query(insert_sql, [label, description, price, category, image], (err, result) => {
		console.log(result);
		console.log(err);
	});


});

module.exports = router; 