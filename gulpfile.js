'use strict';

var
  gulp = require('gulp'),
  compass = require('gulp-compass')
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
