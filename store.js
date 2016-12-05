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
  },

  listInventory: function() {
    var listing = [];
    this.inventory.forEach(function(record){
      listing += record.title + " by " + record.artist + " - £" + record.price;
    });
    return listing;
  },

  findRecord: function(recordTitle) {
    var foundRecord = this.inventory.find(function(record) {
      return record.title === recordTitle;
    });
    return foundRecord;
  },

  sellRecord: function(recordTitle) {
    var record = this.findRecord(recordTitle);
    this.balance += record.price;
  },

  inventoryValueTotal: function() {
    var total = this.inventory.reduce(function(sum, record) {
      return sum + record.price;
    }, 0);
    return total.toFixed(2);
  },

  getFinancialReport: function() {
    return "Total cash = £" + this.balance + ", total value of inventory = £" + this.inventoryValueTotal();
  }

};



module.exports = Store;
