var Minion = function(x, y) {
	this.pos = { x: x, y: y };
	this.health = 100;
	this.dead = false;
};

Minion.prototype.move = function(x, y) {
	this.pos.x += x;
	this.pos.y += y;
};

Minion.prototype.moveTo = function(x, y) {
	this.pos.x = x;
	this.pos.y = y;
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