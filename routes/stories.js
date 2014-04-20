var Story = require('../models/story_schema')
		, mongoose = require('mongoose');

exports.storyview = function(req, res){
	var allStor = Story.find({}).exec(function (err, response) {
		if (err) {
			console.log("Error finding story in database", err);
		} else {
			var stories = response;
			res.render('storyview', {title: 'Stories', list: stories});
		}
	});
};


exports.addstory = function (req, res) {
	res.render('addstory', {title: 'Tell Your Story'});
};

exports.addstorypost = function (req, res) {
	var newStor = new Story({name: req.body.name, email: req.body.email, story: req.body.story, elements: req.body.element});
	newStor.save(function (err) {
		if (err) {
			console.log("Error saving new story", err);
		}
		res.redirect('/stories')
	})

};