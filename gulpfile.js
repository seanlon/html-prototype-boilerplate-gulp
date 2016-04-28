var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

gulp.task('serve', ['sass'], function() {
    browserSync.init({
        server: "./"
    });

    // gulp.watch("/sass/*.scss", ['sass']);
    gulp.watch('sass/**/*.scss', ['styles']);
    gulp.watch("*.html").on('change', reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("/sass/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("/css"))
        .pipe(browserSync.stream());
});

gulp.task('styles', function() {
   return gulp.src('sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css/'))
        .pipe(browserSync.stream());
});




gulp.task('default', ['serve']);
