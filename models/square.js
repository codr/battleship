
function square() {
  this.empty = true;
}

square.prototype.hit = function() {
  return false;
}

square.prototype.placeShipSegment = function(ship, index) {
  this.empty = false;
  this.hit = function() {
    return ship.hit(index);
  }
}

module.exports = square;
