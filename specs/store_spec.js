var assert = require('assert');
var Store = require('../store');

var store;
var recordStub1;
var recordStub2;
var recordStub3;

describe('Store', function() {

  beforeEach(function() {
    recordStub1 = {artist: "REM", title: "Monster", price: 19.95};
    recordStub2 = {artist: "Green Day", title: "Dookie", price: 17.95};
    recordStub3 = {artist: "Weezer", title: "Blue Album", price: 22.95};;
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

  it("should be able to add record to inventory of record store", function(){
    store.addRecord(recordStub1);
    assert.equal(1, store.uniqueRecordCount());
  });

  it("should be able to have multiple records in inventory", function(){
    store.addRecord(recordStub1);
    store.addRecord(recordStub2);
    store.addRecord(recordStub3);
    assert.equal(3, store.uniqueRecordCount());
  });

  it("should be able to add cash to balance", function(){
    store.addCashToBalance(1000);
    assert.equal(1000, store.balance);
  });

});