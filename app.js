const express = require("express");
const app = express();
const faker = require("faker");

var fakeName = faker.name.findName();

app.engine('html', require('ejs').renderFile);
app.use(express.static("Public"));

//routes
app.get("/", function(req, res){
    res.render("index.html", {"fakeName": fakeName});
});

app.get("/emojicode", function(req, res){
    res.render("emojicode.html", {"fakeName": fakeName});
});

app.get("/meltdown_spectre", function(req, res){
    res.render("meltdown_spectre.html", {"fakeName": fakeName});
});

app.get("/ransomware", function(req, res){
    res.render("ransomware.html", {"fakeName": fakeName});
});

app.get("/windows_vs_unix", function(req, res){
    res.render("windows_vs_unix.html", {"fakeName": fakeName});
});

//server listener
//app.listen("8080","127.0.0.1", function(){
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Express Server is Running...");
});