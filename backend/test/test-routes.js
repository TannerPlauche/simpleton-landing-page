var chai = require('chai');
var expect = chai.expect;
var sinon = require('sinon');
var sinonChai = require('sinon-chai');
var routes = require('../routes');

describe('Test for routes module', function() {
  var req, res;

  beforeEach(function() {
    req = {};
    res = { 
      json: sinon.stub(),
      render: sinon.stub()
    };
  })

  it('Should have a home route', function() {
    expect(routes.home).to.exist();
  });

  it('Home should call res.render', function() {
    routes.home(req, res);
    expect(res.render.called).to.be.true();
    expect(res.render.args[0].length).to.equal(2);
  });

  it('Should have a data method', function() {
    expect(routes.data).to.exist();
  });

  it('Data should call res.json', function() {
    routes.data(req, res);
    expect(res.render.called).to.be.false();
    expect(res.json.called).to.be.true();
    expect(res.json.args[0].length).to.equal(1);
  });

});
