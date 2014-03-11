var Minion = require('../app/minion');
var GameMap = require('../app/game-map');
var Vector = require('vector2d');

describe('Minion', function() {
	var minion, map;
	beforeEach(function() {
		map = new GameMap();
		minion = new Minion(map, {
			pos: Vector.create(100, 100)
		});
	});
	
	it('can move', function() {
		minion.move(1, 1);
		expect(minion.pos).toEqual(Vector.create(101, 101));
		
		minion.move(-10, 10);
		expect(minion.pos).toEqual(Vector.create(91, 111));
	});
	
	it('can move to a specific location', function() {
		minion.moveTo(1, 1);
		expect(minion.pos).toEqual(Vector.create(1, 1));
	});
	
	it('can take damage', function() {
		minion.applyDamage(50);
		expect(minion.health).toBe(50);
		
		minion.applyDamage(30);
		expect(minion.health).toBe(20);
		
		minion.applyDamage(20);
		expect(minion.health).toBe(0);
		
		minion.applyDamage(20);
		expect(minion.health).toBe(0);
		
		expect(minion.dead).toBe(true);
	});
	
	it('can be resurrected', function() {
		minion.applyDamage(100);
		expect(minion.dead).toBe(true);
		
		minion.resurrect();
		expect(minion.dead).toBe(false);
		expect(minion.health).toBe(100);
	});
});