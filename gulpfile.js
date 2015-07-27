/* =========================================================================
 *
 * gulpfile.js
 *
 *  Gulp config / script setup
 *
 * ========================================================================= */
var gulp = require('gulp');
var browserify = require('browserify');
var uglify = require('gulp-uglify');
var source = require('vinyl-source-stream');
var concat = require('gulp-concat');
var imagemin = require('gulp-imagemin');
var sass = require('gulp-sass');
var gutil = require('gulp-util');

// Path config
var paths = {
  scripts: './src/documents/scripts/**/*.js',
  css: ['./src/documents/styles/**/*.scss', './src/documents/styles/**/*.sass'],
  images: './src/documents/img/**/*'
};

// Gulp Tasks
// --------------------------------------
gulp.task('scripts', function() {
    // use browserify and optimize scripts
    return browserify('./src/documents/scripts/main.js')
        .bundle()
        .pipe(source('all.js'))
        .on('error', gutil.log)
        .on('error', gutil.beep)
        // TODO: uglify for non dev
        .pipe(gulp.dest('./src/documents/build/scripts/'));
});

gulp.task('scripts-tests', function() {
    // Front end script tests
    return browserify('./src/documents/scripts/tests/main.js')
        .bundle()
        .pipe(source('all-tests.js'))
        .on('error', gutil.log)
        .on('error', gutil.beep)
        // TODO: uglify for non dev
        .pipe(gulp.dest('./src/documents/build/scripts/'));
});

gulp.task('images', function() {
    // Optimize images
    return gulp.src(paths.images)
        .pipe(imagemin({optimizationLevel: 5}))
        .pipe(gulp.dest('./src/documents/img/'));
});

gulp.task('sass', function () {
    // SASS Files
    gulp.src(paths.css)
        .pipe(sass())
        .pipe(gulp.dest('./src/documents/build/styles/'));

    gulp.src(paths.css)
        .pipe(sass())
        .pipe(gulp.dest('./src/documents/styles/'));
});

// Watch
// --------------------------------------
gulp.task('watch', function() {
    // When files change, update
    gulp.watch(paths.scripts, ['scripts']);
    gulp.watch(paths.scripts, ['scripts-tests']);
    gulp.watch(paths.images, ['images']);
    gulp.watch(paths.css, ['sass']);
});

// The default task (called when you run `gulp` from cli)
gulp.task('default', ['watch', 'sass']);
