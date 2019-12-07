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
    cssimport = require('gulp-cssimport'),
    gulpif = require('gulp-if'),
    // cache = require('gulp-cache'),
    csso = require('gulp-csso'),
    concat = require('gulp-concat'),
    sourcemaps = require('gulp-sourcemaps'),
    // const csso = require('csso');
    autoprefixer = require('gulp-autoprefixer');

console.log(c.DEST_FILES_PATH);

const isCss = function (file) {
    return file.extname == '.css';
}
const isSass = function (file) {
    return file.extname == '.sass' || file.extname == '.scss'
}
// const isSass = function (file) {
//     return file.extname == '.scss'
// }

task('clean', () => src(c.DEST_FILES_PATH, { read: false })
    .pipe(clean())
);

task('css', () =>
    // src(c.STYLES_ORDER)
    // src(c.SRC_PATH + 'style/**/*.{css,scss,sass,less}')
    src(c.SRC_PATH + 'css/main.css')
        // .pipe(sourcemaps.init())
        // .pipe(gulpif(isCss, csso()))
        // .pipe(gulpif(isSass, sass()))
        .pipe(cssimport())
        .pipe(autoprefixer({ cascade: false }))//browsers in package.json
        .pipe(csso())
        // .pipe(concat('main.min.css'))
        // .pipe(sourcemaps.write('.'))
        .pipe(dest(c.DEST_PATH + '/css/'))
)

task('sass', () =>
    src(c.SRC_PATH + 'css/sass/*')
        .pipe(sourcemaps.init())
        .pipe(sass())
        // .pipe(autoprefixer({ cascade: false}))
        .pipe(concat('sass.css'))
        .pipe(sourcemaps.write('.'))
        .pipe(dest(c.SRC_PATH + 'style/'))
)

task('scripts', () =>
    src(c.SRC_PATH + 'js/*')
        .pipe(dest(c.DEST_PATH + '/js/'))
)

task('images', () =>
    src(c.SRC_PATH + 'img/*')
        .pipe(dest(c.DEST_PATH + '/img/'))
)

task('sass:watch', () =>
    watch(c.SRC_PATH + 'css/sass/*.s*ss', series('sass'))
);

task('css:watch', () =>
    watch(c.SRC_PATH + 'css/**/*.{css,scss,sass,less}', series('css'))
);
task('scripts:watch', () =>
    watch(c.SRC_PATH + 'js/*.js', series('scripts'))
);
task('images:watch', () =>
    watch(c.SRC_PATH + 'img/*.*', series('images'))
);

task('default', series('clean',
    // series('sass', 'sass:watch'),
    // 'sass',
    parallel(
        series('css', 'css:watch'),
        series('images', 'images:watch'),
        series('scripts', 'scripts:watch')
        // ,
        // 'sass:watch'
    )
)
);