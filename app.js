var express = require('express')
var app = express()

app.get('/', function(req,resp){
  resp.render('index')
})

app.get('/about', function(req,resp){
  resp.render('about')
})

app.get('/contact', function(req,resp){
  resp.render('contact')
})

module.exports = app
