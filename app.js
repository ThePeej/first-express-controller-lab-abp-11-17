var express = require('express')
var app = express()

app.get('/', function(req,resp){
  resp.render(site/index)
})

app.get('/about', function(req,resp){
  resp.render(site/index)
})

app.get('/contact', function(req,resp){
  resp.render(site/contact)
})

module.exports = app
