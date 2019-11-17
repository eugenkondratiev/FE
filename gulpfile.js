const c = require('./constants');
const {
    task,
    src,
    dest,
    series,
    parallel,
    watch
} = require('gulp');
// const gulp = require('gulp');
const sass = require('gulp-sass');
const clean = require('gulp-clean');
const csso = require('gulp-csso');
// const csso = require('csso');
const autoprefixer = require('gulp-autoprefixer');
console.log(c.DEST_FILES_PATH);

task('clean', () => src(c.DEST_FILES_PATH, { read: false })
    .pipe(clean())
);

task('css', () =>
    src(c.SRC_PATH + 'style/*')
        .pipe(csso())
        .pipe(dest(c.DEST_PATH))
)

task('scripts', () => src(c.SRC_PATH + 'script/*')
    .pipe(dest(c.DEST_PATH))
)

task('images', () =>
    src(c.SRC_PATH + 'img/*')
        .pipe(dest(c.DEST_PATH))
)

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
    parallel(
        series('css', 'css:watch'),
        series('images', 'images:watch'),
        series('scripts', 'scripts:watch')
    )
)
);