

exports.curriculumview = function(req, res){
  res.render('curriculumview', { title: 'Curriculum' });
};


exports.addcurriculum = function (req, res) {
	res.render('addcurriculum', {title: 'Share Curriculum'});
};

exports.addcurriculumpost = function (req, res) {
	
};