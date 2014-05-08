var Exp = require('../models/experience_schema')
			, mongoose = require('mongoose');

exports.experienceView = function(req, res){
	var allExp = Exp.find({}).sort({date: -1}).exec(function (err, response) {
		if (err) {
			console.log("Error finding experiences in database", err);
		} else {
			var exp = response;
			res.render('experienceView', {title: "Experiences", list: exp});
		}
	});
};


exports.addExperience = function (req, res) {
	res.render('addExperience', {title: 'Share Your Experience'});
};

exports.addExperiencePost = function (req, res) {
	var date = new Date();
	var newExp = new Exp({name: req.body.name, email: req.body.email, title: req.body.title, experience: req.body.experience, elements: req.body.element, material: req.body.material, date: date});
	newExp.save(function (err) {
		if (err) {
			console.log("Error saving new experience", err);
		}
		res.redirect('/experiences')
	});
};

exports.filterExperiences = function (req, res) {
	var expFilter = Exp.find({elements:req.body.elementfilter}).sort({date: -1}).exec(function (err, response) {
		if (err) {
			console.log("Error filtering experiences", err);
		} else {
			var exp = response;
			res.render('experienceView', {title: 'Experiences', list: exp});
		}
	});
};