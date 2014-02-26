var projects = require('../projects.json');

/*
 * GET home page.
 */

exports.view = function(req, res) {
	// var data = {
	// 	'showGrid' : false,
	// 	'projects' : projects
	// };
	projects.showGrid = false;
	console.log(projects);
  res.render('index', projects);
};

exports.viewGrid = function(req, res) {
	projects.showGrid = true;
	res.render('index', projects);
};