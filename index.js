const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");

const app = express();
app.use(cors());
app.use(express.json());

const con = mysql.createConnection({
	host :  "sql12.freesqldatabase.com",
	user : "sql12753999",
	password : "sIQ3aUsLD7",
	database : "sql12753999"
});

app.post("/save", (req, res) => {
	let sql = "insert into student values(?, ?, ?)";
	let data = [req.body.name, req.body.company, req.body.pkg];
	con.query(sql, data, (err, result) => {
		if (err)		res.send(err);
		else			res.send(result);
	});	
});

app.listen(9000, ()=> { console.log("ready @ 9000"); } );






