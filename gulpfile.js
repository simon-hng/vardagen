let gulp = require('gulp');
let less = require('gulp-less');
let browserSync = require('browser-sync').create();
let LessPluginAutoPrefix = require('less-plugin-autoprefix');
let autoprefixPlugin = new LessPluginAutoPrefix({browsers: ["last 2 versions"]});
let cssmin = require('gulp-cssmin');
let rename = require('gulp-rename');
let plumber = require('gulp-plumber');
let svgSprite = require("gulp-svg-sprites");
 
gulp.task('sprites', function () {
    return gulp.src('app/images/*.svg')
        .pipe(svgSprite())
        .pipe(gulp.dest("app"));
});

gulp.task('less', function() {
    return gulp.src('app/less/styles.less') // Gets all files ending with .less in app/scss
    .pipe(plumber())  
    .pipe(less({
          plugins: [autoprefixPlugin]
      }))
      .pipe(gulp.dest('app/css'))
      .pipe(browserSync.reload({
        stream: true}))
      .pipe(cssmin())
      .pipe(rename({suffix: '.min'}))
      .pipe(gulp.dest('dist/css'));
  });

gulp.task('watch', ['browserSync'], function (){
    gulp.watch('app/less/**/*.less', ['less']); 
    gulp.watch('app/*.html', browserSync.reload); 
    // Other watchers
    })

gulp.task('browserSync', function() {
    browserSync.init({
        server: {
        baseDir: 'app'
    },
})
})