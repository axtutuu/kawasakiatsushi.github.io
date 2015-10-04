'use strict';

var
  gulp    = require('gulp'),
  compass = require('gulp-compass'),
  jade    = require('gulp-jade'),
  coffee   = require('gulp-coffee')
;

gulp.task('sass', function(){
  gulp
    .src('./src/sass/**/*.sass')
    .pipe(compass({
      config_file: './config/compass.rb', // Compass設定ファイル
      comments   : false,
      css        : './public/css/',
      sass       : './src/sass/'
    }));
});

gulp.task('jade', function(){
  gulp.src('./src/jade/**/*.jade')
      .pipe(jade({
        pretty: true
      }))
      .pipe(gulp.dest('./'))
});

gulp.task('coffee', function(){
  gulp.src('./src/coffee/**/*.coffee')
      .pipe(coffee())
      .pipe(gulp.dest('./public/js/'))
});
