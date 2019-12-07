const HOME_PATH = 'html-css/task5/';
const DEST_PATH = 'html-css/task5/public/';
const DEST_FILES_PATH = DEST_PATH + '*';
const SRC_PATH = 'html-css/task5/src/';
const STYLES_PATH = SRC_PATH +'css/';

const STYLES_ORDER = [
    STYLES_PATH + 'main.css',
    STYLES_PATH + 'nav.css',
    STYLES_PATH + 'sass/menu.scss',
    STYLES_PATH + 'sass/foot.sass'
]
module.exports = {
    DEST_PATH,
    DEST_FILES_PATH,
    SRC_PATH,
    STYLES_ORDER,
    HOME_PATH
}