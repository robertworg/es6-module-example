var gulp = require('gulp');
var del = require('del');
var rename = require('gulp-rename');
var jspm = require('jspm');

gulp.task('delete:buildfolder', function () {
    return del([
        'build'
    ]);
});

gulp.task('copy', function () {
    gulp.src(['_index.html'])
        .pipe(rename('index.html'))
        .pipe(gulp.dest('build'))
});

gulp.task('jspm', function () {
    return jspm.bundleSFX('modules/main', 'build/main.js', {sourceMaps: true, minify: true});
});

gulp.task('default', ['delete:buildfolder', 'copy', 'jspm']);
