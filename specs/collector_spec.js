var assert = require('assert');
var Collector = require('../collector');

var collector;

describe('Collector', function() {

  before(function() {
    collector = new Collector("David Geffen", 2500);
  });

  it("record collector should have a name", function() {
    assert.equal("David Geffen", collector.name);
  });

});