var mongoose = require('mongoose');

var story_schema = mongoose.Schema({
	name: String,
	email: String,
	story: String,
	elements: Array
});

var story = mongoose.model('story', story_schema);

module.exports = story;