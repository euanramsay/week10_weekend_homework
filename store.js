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
    return listing
  },

  findRecord: function(recordTitle) {
    var foundRecord = this.inventory.find(function(record) {
      return record.title === recordTitle;
    });
    return foundRecord
  },

  sellRecord: function(recordTitle) {
    var record = this.findRecord(recordTitle);
    this.balance += record.price;
  }

};



module.exports = Store;
