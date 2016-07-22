var Square = require('./square');

function board(length, width) {
  this.length = length || 10;
  this.width = width || 10;
  
  this.squares = [];
  this.ships = [];

  for (var i = 0; i < this.width; i++) {
    this.squares[i] = [];
    for (var j = 0; j < this.length; j++) {
      this.squares[i][j] = new Square();
    }
  }
}

board.prototype.hit = function(x, y) {
  return this.squares[y][x].hit();
};

board.prototype.placeShip = function(ship, x, y, direction) {
  if (!this.isValidPlacement(ship.size, x, y, direction)) {
    return false
  }
  
  this.ships.push(ship);
  for (var i = 0; i < ship.size; i ++) {
    if (direction === 'H') {
      this.squares[y + i][x].placeShipSegment(ship, i);
    } else {
      this.squares[y][x + i].placeShipSegment(ship, i);
    }
  }
  return true;
};

board.prototype.allShipsSunk = function() {
  for (var i = 0; i < this.ships.length; i++ ) {
    if (!this.ships[i].isSunk()) {
      return false;
    }
  }
  return true;
}

board.prototype.isValidPlacement = function (size, x, y, direction) {
  if (x < 0 || y < 0 || x > this.width || y > this.length) {
    return false;
  }
  if (direction === 'H' && x > this.width - size) {
    return false;
  }
  if (direction === 'V' && y > this.length - size) {
    return false;
  }
  for (var i = 0; i < size; i++ ){
    if (direction === 'H' && !this.squares[y + i][x].empty) {
      return false
    } else if (direction === 'V' && !this.squares[y][x + i].empty) {
      return false;
    }
  }
  return true;
};

module.exports = board;
