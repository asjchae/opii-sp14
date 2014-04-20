
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var http = require('http');
var path = require('path');
var stories = require('./routes/stories');
var curriculum = require('./routes/curriculum');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);

app.get('/stories', stories.storyview);
app.get('/tell-your-story', stories.addstory);
app.post('/stories', stories.addstorypost);

app.get('/curriculum', curriculum.curriculumview);
app.get('/share-curriculum', curriculum.addcurriculum);
app.post('/curriculum', curriculum.addcurriculumpost);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
