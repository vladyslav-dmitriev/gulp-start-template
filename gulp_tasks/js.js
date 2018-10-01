const gulp          = require('gulp'),
	  browserSync   = require('browser-sync'),
	  concat        = require('gulp-concat'),
	  uglify        = require('gulp-uglify');

module.exports = function () {
  	return gulp.src([
		'app/libs/jquery/dist/jquery.min.js',
		'app/libs/wow/dist/wow.min.js',
		'app/js/common.js'
		])
	.pipe(concat('scripts.min.js'))
	.pipe(uglify())
	.pipe(gulp.dest('app/js'))
	.pipe(browserSync.reload({ stream: true }))
};