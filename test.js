var Ship = require('./models/ship');
var Board = require('./models/board');
var expect = require('chai').expect;

describe('game', function() {

  it('should place a shit', function() {
    var ship = new Ship(2);
    var board = new Board();
    
    board.placeShip(ship, 2, 2, 'H');
    
    expect( board.squares[2][2].empty ).to.be.false;
    expect( board.squares[3][2].empty ).to.be.false;
  });
  
  it('should hit a ship', function() {
    var ship = new Ship(2);
    var board = new Board();
    board.placeShip(ship, 2, 2, 'H');
    
    board.hit(2, 2);
    
    expect( ship.sections[0] ).to.be.eql('X');
  });
  
  it('should not sink a ship without enough hits', function() {
    var ship = new Ship(2);
    var board = new Board();
    board.placeShip(ship, 2, 2, 'H');
    
    board.hit(2, 2);
    
    expect( ship.isSunk() ).to.be.false;
  });
  
  it('should sink a ship with enough hits', function() {
    var ship = new Ship(2);
    var board = new Board();
    board.placeShip(ship, 2, 2, 'H');
    
    board.hit(2, 2);
    board.hit(2, 3);
    
    expect( ship.isSunk() ).to.be.true;
  });
  
});
