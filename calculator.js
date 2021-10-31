//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({      // use this method of bodyPraser when you want data from html form
    extended: true
  }));  
  
// for /
app.get("/", function(req, res) {

    res.sendFile(__dirname + "/index.html");

});

app.post("/", function(req, res) {         // post request
    
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var sum = num1 + num2;

    res.send("Sum of both numbers = " + sum);

});

// for /bmiCalculator
app.get("/bmiCalculator", function(req, res) {
    res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmiCalculator", function(req, res) {

    var h = parseFloat(req.body.height);
    var wt = parseFloat(req.body.weight);
    var bmi = wt / (h*h);

    res.send("Your BMI = " + bmi);

});

app.listen(3000, function() {
    console.log("Server is running on port 3000");
});