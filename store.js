var Store = function(name, city) {
  this.name = name;
  this.city = city;
  this.inventory = [];
  this.balance = 0;
};

Store.prototype = {
  uniqueRecordCount: function() {
    return this.inventory.length;
  },
  addRecord: function(record) {
    this.inventory.push(record);
  },
  addCashToBalance: function(amount) {
    this.balance += amount;
  }
};



module.exports = Store;
