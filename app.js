var express = require('express')
var app = express()
var SiteController = require('siteController')

app.get('/', index)

app.get('/about', function(req,resp){
  resp.render('about')
})

app.get('/contact', function(req,resp){
  resp.render('contact')
})

module.exports = app
