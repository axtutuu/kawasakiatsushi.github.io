'use strict';

/**************************************************
 * modules laod
 *************************************************/
var
  gulp    = require('gulp'),
  compass = require('gulp-compass'),
  jade    = require('gulp-jade'),
  coffee   = require('gulp-coffee'),
  connect = require('gulp-connect')
  // watchify   = require( 'watchify' ),
  browserify = require( 'browserify' )
;

/**************************************************
 * path
 *************************************************/
var
  cssSrcPath = './src/sass',
  cssDestPath = './public/css',
  htmlSrcPath = './src/jade',
  htmlDestPath = './',
  jsSrcPath = './src/coffee',
  jsDestPath = './public/js'
;

/**************************************************
 * tasks
 *************************************************/

gulp.task('sass', function(){
  gulp
    .src('./src/sass/**/*.scss')
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

gulp.task('watch', function(){
  gulp.watch('./src/sass/**/*.scss', ['sass']);
  gulp.watch('./src/jade/**/*.jade', ['jade']);
  gulp.watch('./src/coffee/**/*.coffee', ['coffee']);
});

gulp.task('connect', function(){
  connect.server({
    root: '/Users/kawasaki-atsushi/workspace/kawasakiatsushi.github.io/',
    livereload: true
  });
});

gulp.task('build', function(){
});
