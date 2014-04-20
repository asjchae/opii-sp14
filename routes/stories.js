var Story = require('../models/story_schema')
		, mongoose = require('mongoose');

exports.storyview = function(req, res){
	var allStor = Story.find({}).sort({date: -1}).exec(function (err, response) {
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
	var date = new Date();
	var newStor = new Story({name: req.body.name, email: req.body.email, title: req.body.title, story: req.body.story, elements: req.body.element, date: date});
	newStor.save(function (err) {
		if (err) {
			console.log("Error saving new story", err);
		}
		res.redirect('/stories')
	})

};

exports.filterstory = function (req, res) {
	var storFilter = Story.find({elements:req.body.elementfilter}).sort({date: -1}).exec(function (err, response) {
		if (err) {
			console.log("Error filtering stories", err);
		} else {
			var stories = response;
			res.render('storyview', {title: 'Stories', list: stories});
		}
	});
};