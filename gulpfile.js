var gulp = require('gulp');
var less = require('gulp-less');
var browserSync = require('browser-sync').create();

gulp.task('less', function() {
    return gulp.src('app/less/**/*.less') // Gets all files ending with .scss in app/scss
      .pipe(less())
      .pipe(gulp.dest('app/css'))
      .pipe(browserSync.reload({
        stream: true
      }))
  });

  gulp.task('watch', ['browserSync'], function (){
    gulp.watch('app/less/**/*.less', ['less']); 
    // Other watchers
  })

gulp.task('browserSync', function() {
    browserSync.init({
        server: {
        baseDir: 'app'
    },
})
})