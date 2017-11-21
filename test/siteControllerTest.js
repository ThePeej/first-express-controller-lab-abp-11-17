'use strict';

process.env.NODE_ENV = 'test';

const chai = require('chai')
  , expect = chai.expect

const chaiHttp = require('chai-http');
const sinon = require('sinon');
const sinonChai = require("sinon-chai");
const proxyquire = require('proxyquire')
const SiteController = require("../controllers/SiteController.js")
const app = require('../server');
const server = app.listen(3001)

chai.use(chaiHttp);
chai.use(sinonChai);

describe("SiteController.js", function(){
  it("defines and exports the SiteController object", function(){
    expect(SiteController).to.exist
  })
  
  it("defines an Index function on SiteController", function(){
    expect(SiteController.Index).to.be.a("function")
  })

  describe("GET / routing to SiteController.Index", function(){
    it("routes '/' to SiteController.Index", function(done){
      chai.request(app)
        .get("/")
        .end(function(err, res){  
          expect(res.text).to.contain("Home Page")
          done();
        }); 
    })
  })

  describe("GET / routing to SiteController.Index", function(){
    it("routes '/' to SiteController.Index", function(done){
      const spy = sinon.spy(app, 'render');
      
      chai.request(app)
        .get("/")
        .end(function(err, res){
          const viewRendered = spy.getCall(0).args[0];
      
          expect(viewRendered).to.be.eql('site/index');
      
          spy.restore();
          done()
        });
    })
  })

  describe("GET /about routing to SiteController.About", function(){
    it("routes '/about' to SiteController.About", function(done){
      chai.request(app)
        .get("/about")
        .end(function(err, res){  
          expect(res.text).to.contain("About Page")
          done();
        }); 
    })
  })

  describe("GET /about routing to SiteController.About", function(){
    it("routes '/about' to SiteController.About", function(done){
      const spy = sinon.spy(app, 'render');
      
      chai.request(app)
        .get("/about")
        .end(function(err, res){
          const viewRendered = spy.getCall(0).args[0];
      
          expect(viewRendered).to.be.eql('site/about');
      
          spy.restore();
          done()
        });
    })
  })

})
