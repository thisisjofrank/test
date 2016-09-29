// requirements
var gulp = require('gulp');
var concat = require('gulp-concat');
var cssmin = require('gulp-minify-css');
var rename = require("gulp-rename");
var less = require('gulp-less');
var uglify = require('gulp-uglify');
var connect = require('gulp-connect');
var concatCss = require('gulp-concat-css');


// scripts task
gulp.task('scripts', function() {
  return gulp.src('./src/js/*.js')
    .pipe(concat('script.js'))
    .pipe(gulp.dest('./dist/js/'))
    .pipe(uglify())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('./dist/js/'));
});

// styles task
gulp.task('styles', function() {
  return gulp.src('./src/styles/*.less')
    .pipe(less())
    .pipe(gulp.dest('./dist/styles/'));
});

gulp.task('watch', function() {
  gulp.watch('./src/js/*.js', ['scripts']);
  gulp.watch('./src/styles/*.less', ['styles']);
});

var gulp = require('gulp'),
  connect = require('gulp-connect');

gulp.task('webserver', function() {
    connect.server({
    });
});

gulp.task('concat', function() {
    return gulp.src('dist/**/*.css')
        .pipe(concatCss("bundle.css"))
        .pipe(gulp.dest('dist/concat/'))
        .pipe(cssmin())
        .pipe(rename({
          suffix: '.min'
        }))
        .pipe(gulp.dest('./dist/concat/'));
});

gulp.task('default', ['scripts', 'styles', 'watch', 'concat', 'webserver']);
