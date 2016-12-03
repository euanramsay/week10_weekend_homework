var Store = function(name, city) {
  this.name = name;
  this.city = city;
  this.inventory = [];
};

Store.prototype = {
  uniqueRecordCount: function() {
    return this.inventory.length;
  }
};



module.exports = Store;
