const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("public"));

app.engine("handlebars",exphbs({defaultLayout: "main"}));
app.set("view engine","handlebars");

require("./controllers/burgers_controller.js")(app);


app.listen(PORT,function(){
  console.log("Listening in on..."+PORT);
});
