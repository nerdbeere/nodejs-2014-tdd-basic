var Minion = function(x, y) {
	this.pos = { x: x, y: y };
	this.health = 100;
	this.dead = false;
};

// Move the minion
Minion.prototype.move = function(x, y) {
	
};

// Move the minion to a specific location
Minion.prototype.moveTo = function(x, y) {
	
};

// Apply damage to the minion
Minion.prototype.applyDamage = function(amount) {

};

// Resurrect the minion
Minion.prototype.resurrect = function() {

};

module.exports = Minion;