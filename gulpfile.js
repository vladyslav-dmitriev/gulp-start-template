const gulp          = require('gulp'),
	  gutil         = require('gulp-util' ),
	  sass          = require('gulp-sass'),
	  browserSync   = require('browser-sync'),
	  concat        = require('gulp-concat'),
	  uglify        = require('gulp-uglify'),
	  cleancss      = require('gulp-clean-css'),
	  rename        = require('gulp-rename'),
	  autoprefixer  = require('gulp-autoprefixer'),
	  notify        = require('gulp-notify'),
	  del 			= require('del'),
	  requireDir 	= require('require-dir'),
	  tasks 		= requireDir('./gulp_tasks');

gulp.task('browser-sync', tasks.browserSync);
gulp.task('sass', tasks.sass);
gulp.task('js', tasks.js);
gulp.task('removedist', tasks.removedist);
gulp.task('build', ['removedist', 'sass', 'js'], tasks.build);
gulp.task('watch', ['sass', 'js', 'browser-sync'], tasks.watch);
gulp.task('default', ['watch']);
