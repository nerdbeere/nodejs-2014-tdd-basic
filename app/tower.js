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

module.exports = Tower;