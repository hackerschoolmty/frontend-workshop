var express = require('express');
var app = express();

var bodyParser = require('body-parser')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

var comments = [];

app.get("/getComments", function(req, res){
  res.send(JSON.stringify(comments));
});

app.post("/addComment", function(req, res){
  var newComment = {
      photo: req.body.photo,
      name: req.body.name,
      comment: req.body.comment
  };

  comments.push(newComment);

  res.send('ok');
});

app.get("/clearComments", function(req, res){
  comments = [];
  res.send("ok");
});

app.listen(3000, function(){
  console.log('listening on port 3000');
});
