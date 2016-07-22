
function ship(size) {
  this.size = size;
  this.sections = [];
}

ship.prototype.hit = function(index) {
  this.sections[index] = 'X';
  return true;
};

ship.prototype.isSunk = function() {
  for (var i = 0; i < this.size; i++) {
    if (this.sections[i] !== 'X') {
      return false;
    }
  }
  return true;
}

module.exports = ship;
