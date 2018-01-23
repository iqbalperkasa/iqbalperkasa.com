var gulp = require('gulp');
var sass = require('gulp-sass');
var htmlmin = require('gulp-htmlmin');

gulp.task('styles', function () {
  gulp.src('*.scss')
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(gulp.dest('./'));
});

gulp.task('htmlmin', function () {
  return gulp.src('index.html')
  .pipe(htmlmin({
    collapseWhitespace: true,
    removeAttributeQuotes: true,
    removeEmptyAttributes: true,
    removeEmptyElements: true,
    removeOptionalTags: true
  }))
  .pipe(gulp.dest('minified_html'));
});

gulp.task('default', function () {
  gulp.watch('*.scss', ['styles']);
});