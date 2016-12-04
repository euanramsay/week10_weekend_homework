var Record = function(artist, title, price) {
  this.artist = artist;
  this.title = title;
  this.price = price;
};

Record.prototype = {
  
  returnRecordListing: function() {
    return this.title + " by " + this.artist + " - £" + this.price;
  } 

};



module.exports = Record;
