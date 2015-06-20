var gulp    = require('gulp');
var watch   = require('gulp-watch');
var sass    = require('gulp-ruby-sass');
var uglify  = require('gulp-uglifyjs');

var cssDir  = 'scss';
var jsDir   = 'js';

gulp.task('watch', function () 
{
	gulp.watch(cssDir + '/**/*.scss', ['css']);
	gulp.watch(jsDir + '/**/*.js', ['js']);
   gulp.watch(jsDir + '/**/*.js', ['userjs']);
}); 

gulp.task('css', function () 
{
   return sass(cssDir)
  .pipe(gulp.dest('./assets/css'));      
});

gulp.task('js', function () 
{
    gulp.src('js/faqs-admin.js')
    .pipe(uglify('faqs-admin.js'))
    .pipe(gulp.dest('./assets/js'));
});

gulp.task('userjs', function () 
{
    gulp.src('js/faqs-user.js')
    .pipe(uglify('faqs-user.js'))
    .pipe(gulp.dest('./assets/js'));
});

gulp.task('default', ['css', 'js']); 