var Curriculum = require('../models/curriculum_schema')
			, mongoose = require('mongoose');

exports.curriculumview = function(req, res){
	var allCur = Curriculum.find({}).exec(function (err, response) {
		if (err) {
			console.log("Error finding curriculum in database", err);
		} else {
			var curricula = response;
			res.render('curriculumview', {title: "Curriculum", list: curricula});
		}
	});
};


exports.addcurriculum = function (req, res) {
	res.render('addcurriculum', {title: 'Share Curriculum'});
};

exports.addcurriculumpost = function (req, res) {
	var newCur = new Curriculum({name: req.body.name, email: req.body.email, curriculum: req.body.curriculum, elements: req.body.element});
	newCur.save(function (err) {
		if (err) {
			console.log("Error saving new curriculum", err);
		}
		res.redirect('/curriculum')
	});
};