const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

gulp.task('styles', () => {
    return gulp.src('assets/sass/style.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('assets/css/'));
}); 

gulp.task('watch', () => {
    gulp.watch('assets/sass/**/*.scss', (done) => {
        gulp.series(['styles'])(done);
    });
});

gulp.task('default', gulp.series(['styles']));