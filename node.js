var express          = require("express"),
    node             = express(),
    bodyParser       = require("body-parser"),
    mongoose         = require("mongoose"),
    methodOverride   = require("method-override");
    
// var   ejs       = require("require-ejs");      
// var board            = require ("./views/board");
// var begg             = require("./views/begg");

// var jsdom = require('jsdom');
// const { JSDOM } = jsdom;
// const { window } = new JSDOM();
// const { document } = (new JSDOM('')).window;
// global.document = document;
// var $ = require('jquery')(window);

// var app              = require("./views/app");

mongoose.connect("mongodb://localhost/TTT");
node.set("view engine", "ejs");  
node.use(express.static(__dirname + '/views'));
node.use(methodOverride("_method"));
node.use(bodyParser.urlencoded({extended: true}));


var playerSchema = new mongoose.Schema({
    username: String,
    wins: 0
 
});
var Player = mongoose.model("Player", playerSchema);
    
node.get("/", function(req, res){
    res.render("begg");
});

node.get("/no", function(req,res){
    res.render("no");
});
node.post("/no", function(req,res){
    res.redirect("/no")
});   
    
node.post("/game", function(req, res){
    var wins = 0;
    var newPlayer = new Player({id: req.params.id , username: req.body.name, wins: wins++});
    newPlayer.save(function(err, newPlayer){
        if (err) {
            console.log(err);
        } else {
            console.log(newPlayer);
            res.render("board" , {username : newPlayer.username, wins: wins++});
  
        }
    });
});

node.get("/game", function(req, res){
    res.render("board");
});

node.listen(process.env.PORT, process.env.IP, function(){
   console.log("The Server Has Started!");
});
