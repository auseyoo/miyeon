const gulp = require('gulp');
const concat = require('gulp-concat');

// ***********************
// Move JS Files to src/js
// ***********************

gulp.task('js', function () {
    return gulp.src([
      'node_modules/jquery/dist/jquery.min.js',
      'node_modules/bootstrap/dist/js/bootstrap.min.js',
     
    ])
        .pipe(gulp.dest("src/js"))
});

// *****************************
// Combine All js files into one
// *****************************

gulp.task('scripts', function () {
    return gulp.src([

  ])
        .pipe(concat('alime.bundle.js'))
        .pipe(gulp.dest('./src/js/'))
});

// ************************************
// Move Font Awesome Fonts to src/fonts
// ************************************

gulp.task('fafonts', function () {
    return gulp.src([
      'node_modules/font-awesome/fonts/*'
    ])
        .pipe(gulp.dest('src/fonts'))
})

// *******************************
// Move Elegent Icons to src/fonts
// *******************************
gulp.task('elefonts', function () {
    return gulp.src([
      'node_modules/elegant-icons/fonts/*'
    ])
        .pipe(gulp.dest('src/css/fonts'))
})

// *******************
// Move CSS to src/css
// *******************

gulp.task('css', function () {
    return gulp.src([
      'node_modules/bootstrap/dist/css/bootstrap.min.css',
      'node_modules/font-awesome/css/font-awesome.min.css',
      'node_modules/owl.carousel2/dist/assets/owl.carousel.min.css',
      'node_modules/elegant-icons/style.css',
      'node_modules/wowjs/css/libs/animate.css',
      'node_modules/magnific-popup/dist/magnific-popup.css'
    ])
        .pipe(gulp.dest('src/css'))
})

gulp.task('default', ['js', 'scripts', 'css', 'fafonts', 'elefonts']);