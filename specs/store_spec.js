var assert = require('assert');
var Store = require('../store');

var store;

describe('Store', function() {

  before(function() {
    store = new Store("Tower Records");
  });

  it("record store should have a name", function() {
    assert.equal("Tower Records", store.name);
  });

});