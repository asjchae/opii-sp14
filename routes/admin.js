var Exp = require('../models/experience_schema')
			, mongoose = require('mongoose');

exports.adminView = function(req, res){
	var allExp = Exp.find({}).sort({date: -1}).exec(function (err, response) {
		if (err) {
			console.log("Error finding experiences in database", err);
		} else {
			var exp = response;
			res.render('adminView', {title: "Admin View", list: exp});
		}
	});
};

exports.deleteExp = function (req, res) {
	Exp.remove({_id: req.body.id}).exec(function (err, order) {
		if (err) {
			console.log("Error deleting experience", err);
		}
	});

	res.redirect('/admin-view');
};
