let gulp = require('gulp');
let less = require('gulp-less');
let browserSync = require('browser-sync').create();
let LessPluginAutoPrefix = require('less-plugin-autoprefix');
let autoprefixPlugin = new LessPluginAutoPrefix({browsers: ["last 2 versions"]});
let cssmin = require('gulp-cssmin');
let plumber = require('gulp-plumber');
let svgSprite = require("gulp-svg-sprites");
let useref = require('gulp-useref');
let gulpIf = require('gulp-if');
let jsmin = require('gulp-jsmin');
let imagemin = require('gulp-imagemin');
let del = require('del');
let runSequence = require('run-sequence');

gulp.task('less', function() {
    return gulp.src('app/less/styles.less')
    .pipe(plumber())  
    .pipe(less({
        plugins: [autoprefixPlugin]
    }))
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({
        stream: true
    }))
    .pipe(gulp.dest('dist/css'));
});


gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: 'app'
        }
    });
});

gulp.task('watch', ['browserSync'], function (){
    gulp.watch('app/less/**/*.less', ['less']); 
    gulp.watch('app/*.html', browserSync.reload); 
    gulp.watch('app/js/*.js', browserSync.reload); 
});

//delete dist
gulp.task('clean', function(){
    return del.sync('dist');
})

//svgs
gulp.task('sprites', function () {
    return gulp.src('app/images/*.svg')
    .pipe(svgSprite({mode: "symbols"}))
    .pipe(gulp.dest("app"));
});

//images no SVG
gulp.task('images', function(){
    return gulp.src('app/images/**/*.+(png|jpeg|jpg|gif|svg)')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/images'))
});

//js and css
gulp.task('useref', function(){
    return gulp.src('app/index.html')
    .pipe(useref())
    .pipe(cssmin())
    .pipe(gulpIf('*.js', jsmin()))
    .pipe(gulp.dest('dist'))
});

gulp.task('dev', function(callback) {
    runSequence('less', 'sprites', 'watch', callback);
  });

gulp.task('build', function(callback) {
    runSequence(`clean`, `less`, `useref`, 'images', callback);
  });