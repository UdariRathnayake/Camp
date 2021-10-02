var express = require("express");
var app = express();

app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

app.get("/", function(req,res) {
    res.render("landing");
});

app.get("/Campsites", function(req,res) {
    res.render("campsites");
});

app.listen("3001", function() {
    console.log("CampSite Is Started");
});