var Minion = function(x, y) {
	this.pos = { x: x, y: y };
	this.health = 100;
	this.dead = false;
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