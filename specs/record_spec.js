var assert = require('assert');
var Record = require('../record');

var record;

describe('Record', function() {

  before(function() {
    record = new Record("REM", "Monster", 16.95);
  });

  it("record should have an artist", function() {
    assert.equal("REM", record.artist);
  });

  it("record should have a title", function() {
    assert.equal("Monster", record.title);
  });

  it("record should have a price", function() {
    assert.equal(16.95, record.price);
  });

});