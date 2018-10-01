const gulp = require('gulp');

module.exports = function () {
  	var buildFiles = gulp.src([
		'app/*.html',
		]).pipe(gulp.dest('dist'));

	var buildCss = gulp.src([
		'app/css/**/*',
		]).pipe(gulp.dest('dist/css'));

	var buildJs = gulp.src([
		'app/js/scripts.min.js',
		]).pipe(gulp.dest('dist/js'));

	var buildFonts = gulp.src([
		'app/fonts/**/*',
		]).pipe(gulp.dest('dist/fonts'));

	var buildImg = gulp.src([
		'app/img/**/*',
		]).pipe(gulp.dest('dist/img'));
};