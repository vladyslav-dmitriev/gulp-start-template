const gulp 			= require('gulp'),
	  browserSync   = require('browser-sync');

module.exports = function () {
  	gulp.watch('app/sass/**/*.sass', ['sass']);
	gulp.watch(['libs/**/*.js', 'app/js/common.js'], ['js']);	
	gulp.watch('app/*.html', browserSync.reload)
};