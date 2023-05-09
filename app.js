//jshin esversion : 6


const express = require("express");
const bodyParse = require("body-parser");
const date = require(__dirname +'/date.js');

console.log(module);


const app = express();

let items = ["Buy Food", "Cook Food", "Eat Food"];
let workItems = [];
app.set('view engine', 'ejs');

app.use(bodyParse.urlencoded({
  extended: true
}))
app.use(express.static("public"));

app.get("/", function (req, res) {
     let day = date.getDay();

  res.render("list", {
    listTitle: day,
    newListItem: items
  });
});

app.post('/', function (req, res) {
     console.log(req.body);
  let item = req.body.newItem;
  if (req.body.list == "Work") {
     workItems.push(item);
     res.redirect("/work");
  }else {
     items.push(item);
     res.redirect("/");
  }
});


app.get('/work', function (req, res) {
     res.render("list", {
          listTitle: "Work List",
          newListItem: workItems
     });
});

app.get('/about', function(req, res){
     res.render('about');
})

app.post('/work', function (req, res) {
     let workItem = req.body.item;
     workItems.push(workItem);
     res.redirect("/work")

})


app.listen(3000, function () {
     console.log("server started on port 3000");
})
