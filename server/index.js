var express = require('express');
var app = express();

var bodyParser = require('body-parser')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

var comments = [
  {
    photo: 'http://hackerschool.mx/assets/img/about/edo.jpg',
    name: 'Eduardo',
    comment: 'Chingón'
  },
  {
    photo: 'http://hackerschool.mx/assets/img/about/jp.jpeg',
    name: 'Juan',
    comment: 'Ese brayan!'
  },
  {
    photo: 'http://hackerschool.mx/assets/img/about/alan.jpg',
    name: 'Alan',
    comment: 'Aprende React we'
  }
];

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

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
