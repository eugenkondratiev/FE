const DEST_PATH = 'html-css/task-1/public/';
const DEST_FILES_PATH = DEST_PATH + '*';
const SRC_PATH = 'html-css/task-1/';
const STYLES_PATH = 'html-css/task-1/style/';

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
    STYLES_ORDER
}