var Vector = require('vector2d');

var Minion = function(map, opts) {
	opts = opts || {};
	
	this.pos = opts.pos || Vector.create(0, 0);
	this.health = opts.health || 100;
	this.dead = false;
	
	map.minions.push(this);
};

Minion.prototype.move = function(x, y) {
	this.pos.setX(this.pos.getX() + x);
	this.pos.setY(this.pos.getY() + y);
};

Minion.prototype.moveTo = function(x, y) {
	this.pos.setX(x);
	this.pos.setY(y);
};

Minion.prototype.applyDamage = function(amount) {
	this.health -= amount;
	if(this.health <= 0) {
		this.health = 0;
		this.dead = true;
	}
};

Minion.prototype.resurrect = function() {
	this.health = 100;
	this.dead = false;
};

module.exports = Minion;