//jshin esversion : 6


const express = require("express");
const bodyParse = require("body-parser");


const app = express();

let items =["buy", "food", "eat", "sleep"];
app.set('view engine', 'ejs');

app.use(bodyParse.urlencoded({extended:true}))
app.use(express.static("public"));

app.get("/", function(req, res){
    
     let today = new Date();
     let options = {
          weekday: "long",
          day: "numeric",
          month:"long",
          year:"numeric"
     };
     let day = today.toLocaleDateString("en-US", options);
     res.render("list", {kindOfDay: day, newListItem: items});
});

app.post('/', function(req, res){
   let item = req.body.newItem;
     //items.push(item);
     items.push(item)
     res.redirect("/");
});

app.listen(3000, function(){
     console.log("server started on port 3000");
})