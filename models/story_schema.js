var mongoose = require('mongoose');

var story_schema = mongoose.Schema({
	title: String,
	name: String,
	email: String,
	story: String,
	elements: Array,
	date: Date
});

var story = mongoose.model('story', story_schema);

module.exports = story;