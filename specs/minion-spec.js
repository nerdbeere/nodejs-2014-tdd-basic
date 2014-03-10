var Minion = require('../app/minion');

describe('Minion', function() {
	var minion;
	beforeEach(function() {
		minion = new Minion(100, 100);
	});
	
	it('can move', function() {
		minion.move(1, 1);
		expect(minion.pos).toEqual({x: 101, y: 101});
		
		minion.move(-10, 10);
		expect(minion.pos).toEqual({x: 91, y: 111});
	});
	
	it('can move to a specific location', function() {
		minion.moveTo(1, 1);
		expect(minion.pos).toEqual({x: 1, y: 1});
	});
	
	it('can take damage', function() {
		minion.applyDamage(50);
		expect(minion.health).toBe(50);
		
		minion.applyDamage(30);
		expect(minion.health).toBe(20);
		
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