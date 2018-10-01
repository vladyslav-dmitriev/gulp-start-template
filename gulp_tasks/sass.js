const gulp          = require('gulp'),
	  sass          = require('gulp-sass'),
	  browserSync   = require('browser-sync'),
	  cleancss      = require('gulp-clean-css'),
	  rename        = require('gulp-rename'),
	  autoprefixer  = require('gulp-autoprefixer'),
	  notify        = require('gulp-notify');

module.exports = function () {
  	return gulp.src('app/sass/**/*.sass')
		.pipe(sass({ outputStyle: 'expanded' }).on("error", notify.onError()))
		.pipe(rename({ suffix: '.min', prefix : '' }))
		.pipe(autoprefixer(['last 15 versions']))
		.pipe(cleancss())
		.pipe(gulp.dest('app/css'))
		.pipe(browserSync.stream())
};