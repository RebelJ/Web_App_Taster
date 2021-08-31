var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var mysql = require('mysql');

const db = mysql.createPool({
	host: "localhost",
	user: "root",
	password: "root",
	database: "crud_db"
});


router.get("/get", function (req, res) {
	const get_sql = "SELECT * from items";
	db.query(get_sql, (err, result) => {
		res.send(result);
		console.log("Items is correctly get");
	
	});


});


router.get("/", function (req, res) {
	res.send("Items is correctly add");
});



router.use(bodyParser.urlencoded({ extended: true }));

router.post("/insert", function (req, res) {
	const label = req.body.label;
	const description = req.body.description;
	const price = req.body.price;
	const category = req.body.category;
	const image = req.body.image;

	
	const insert_sql = "INSERT INTO items (label, description, price, category, image) VALUES (?, ?, ?, ?, ?)";
	db.query(insert_sql, [label, description, price, category, image], (err, result) => {
		console.log("Items is correctly add");
	//	res.render("Items is correctly add");
	});


	//insert into label values ??
})

module.exports = router; 