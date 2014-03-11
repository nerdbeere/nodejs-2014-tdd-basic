var Vector = require('vector2d');
var Tower = function(map, opts) {
	opts = opts || {};
	
	this.map = map;
	this.range = opts.range || 20;
	this.pos = opts.pos || Vector.create(1, 1);
	this.target = null;
	this.damage = opts.damage || 20;
	
	this.map.towers.push(this);
};

Tower.prototype.findTarget = function() {
	// iterate over all minions on the map
	for(var i = 0; i < this.map.minions.length; i++) {
		var minion = this.map.minions[i];
		var distance = Vector.distance(this.pos, minion.pos);
		if(distance <= this.range && minion.dead !== true) {
			this.target = minion;
			break;
		}
	}
}

Tower.prototype.attack = function() {
	if(!this.target) {
		return false;
	}
	
	this.target.applyDamage(this.damage);
	
	if(this.target.dead === true) {
		this.target = null;
		this.findTarget();
	}
	
	return true;
}

module.exports = Tower;