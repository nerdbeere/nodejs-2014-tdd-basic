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
	
	it('should find a target', function() {
		tower.findTarget();
		expect(tower.target).toEqual(minion);
	});
			
	it('can deal damage to a minion', function() {
		tower.findTarget();
		var successfulAttack = tower.attack();
		
		expect(minion.health).toBe(80);
		expect(successfulAttack).toBe(true);
	});
	
	it('should find another target after a minion dies', function() {
		var minion2 = new Minion(map, {
			pos: Vector.create(105, 105)
		});
		
		tower.findTarget();
		tower.damage = 100;
		tower.attack();
		
		expect(tower.target).toEqual(minion2);
	});
});