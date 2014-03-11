var Vector = require('vector2d');

var Minion = function(map, opts) {
	opts = opts || {};
	
	this.pos = opts.pos || Vector.create(0, 0);
	this.health = opts.health || 100;
	this.dead = false;
	
	map.minions.push(this);
};

Minion.prototype.move = function(x, y) {
	
};

Minion.prototype.moveTo = function(x, y) {
	
};

Minion.prototype.applyDamage = function(amount) {
	
};

Minion.prototype.resurrect = function() {
	
};

module.exports = Minion;