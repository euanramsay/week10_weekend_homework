var assert = require('assert');
var Record = require('../record');

var record;

describe('Record', function() {

  before(function() {
    record = new Record("REM", "Monster", 19.95);
  });

  it("record should have an artist", function() {
    assert.equal("REM", record.artist);
  });

});