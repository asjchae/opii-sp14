var mongoose = require('mongoose');

var curriculum_schema = mongoose.Schema({
	title: String,
	name: String,
	email: String,
	curriculum: String,
	elements: Array,
	date: Date

});

var curriculum = mongoose.model('curriculum', curriculum_schema);

module.exports = curriculum;