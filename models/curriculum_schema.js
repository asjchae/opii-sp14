var mongoose = require('mongoose');

var curriculum_schema = mongoose.Schema({
	name: String,
	email: String,
	curriculum: String,
	elements: Array

});

var curriculum = mongoose.model('curriculum', curriculum_schema);

module.exports = curriculum;