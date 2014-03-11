var Minion = require('../app/minion');
var Tower = require('../app/tower');
var GameMap = require('../app/game-map');
var Vector = require('vector2d');

describe('Tower', function() {
	
	var minion, tower, map;
	beforeEach(function() {
		map = new GameMap();
		minion = new Minion(map, {
			pos: Vector.create(100, 100)
		});
		tower = new Tower(map, {
			pos: Vector.create(100, 110)
		});
	});
	
	xit('should find a target', function() {
		
	});
			
	xit('can deal damage to a minion', function() {
		
	});
	
	xit('should find another target after a minion dies', function() {
		
	});
});