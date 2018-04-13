var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var sass = require('gulp-sass');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');

var assetsPath = '../public/assets';

var plugins = [
  autoprefixer({
    browsers: ['> 1%'], cascade: false
  })
];

gulp.task('css', function () {
  return gulp.src(assetsPath + '/src/sass/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(postcss(plugins))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(assetsPath + '/css'));
});

gulp.task('default', ['css'],  function() {
  console.log('Gulp Default');
});

gulp.task('watch', ['css'], function (){
  console.log("Gulp is keeping it's eyes peeled for changes");
  gulp.watch(assetsPath + '/src/sass/**/*', ['css']);
});
