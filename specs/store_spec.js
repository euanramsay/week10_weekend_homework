var assert = require('assert');
var Store = require('../store');

var store;

describe('Store', function() {

  before(function() {
    store = new Store("Tower Records", "Glasgow");
  });

  it("record store should have a name", function() {
    assert.equal("Tower Records", store.name);
  });

  it("record store should have a city", function(){
    assert.equal("Glasgow", store.city);
  });

  it("record store should start with no records in inventory", function(){
    assert.equal(0, store.uniqueRecordCount());
  });

});