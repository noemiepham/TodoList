//jshin esversion : 6


const express = require("express");
const bodyParse = require("body-parser");


const app = express();

let items =["buy", "food", "eat", "sleep"];
let workItems =[];
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
     res.render("list", {listTitle: day, newListItem: items});
});

app.post('/', function(req, res){
   let item = req.body.newItem;
     //items.push(item);
     items.push(item)
     res.redirect("/");
});


app.get('/work', function(req, res){
    res.render("list", {listTitle:"work list", newListItem: workItems});
});

app.post('/work', function(req, res){
     let workItem = req.body.item;
     workItems.push(workItem);
     res.redirect("/work")

})
app.listen(3000, function(){
     console.log("server started on port 3000");
})