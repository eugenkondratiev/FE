const c = require('./constants'),
    {
        task,
        src,
        dest,
        series,
        parallel,
        watch
    } = require('gulp'),
    // const gulp = require('gulp');
    sass = require('gulp-sass'),
    clean = require('gulp-clean'),
    csso = require('gulp-csso'),
    concat = require('gulp-concat'),
    sourcemaps = require('gulp-sourcemaps'),
    // const csso = require('csso');
    autoprefixer = require('gulp-autoprefixer');

console.log(c.DEST_FILES_PATH);

task('clean', () => src(c.DEST_FILES_PATH, { read: false })
    .pipe(clean())
);

task('css', () =>
    src(c.SRC_PATH + 'style/**/*.css')
        // src(c.SRC_PATH + 'style/**/*.{css,scss,sass,less}')
        .pipe(sourcemaps.init())
        .pipe(csso())
        .pipe(autoprefixer({ cascade: false }))
        .pipe(concat('main.min.css'))
        .pipe(sourcemaps.write('.'))
        .pipe(dest(c.DEST_PATH + '/style/'))
)

task('sass', () =>
    src(c.SRC_PATH + 'style/sass/*')
        .pipe(sourcemaps.init())
        .pipe(sass())
        // .pipe(autoprefixer({ cascade: false}))
        .pipe(concat('sass.css'))
        .pipe(sourcemaps.write('.'))
        .pipe(dest(c.SRC_PATH + 'style/'))
)

task('scripts', () =>
    src(c.SRC_PATH + 'script/*')
        .pipe(dest(c.DEST_PATH + '/script/'))
)

task('images', () =>
    src(c.SRC_PATH + 'img/*')
        .pipe(dest(c.DEST_PATH + '/img/'))
)

task('sass:watch', () =>
    watch(c.SRC_PATH + 'style/sass/*.s*ss', series('sass'))
);
task('css:watch', () =>
    watch(c.SRC_PATH + 'style/*.css', series('css'))
);
task('scripts:watch', () =>
    watch(c.SRC_PATH + 'script/*.js', series('scripts'))
);
task('images:watch', () =>
    watch(c.SRC_PATH + 'img/*.*', series('images'))
);

task('default', series('clean',
    // series('sass', 'sass:watch'),
    'sass',
    parallel(
        series('css', 'css:watch'),
        series('images', 'images:watch'),
        series('scripts', 'scripts:watch'),
        'sass:watch'
    )

)
);