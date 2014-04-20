

exports.storyview = function(req, res){
  res.render('storyview', { title: 'Stories' });
};


exports.addstory = function (req, res) {
	res.render('addstory', {title: 'Tell Your Story'});
};

exports.addstorypost = function (req, res) {
	
};