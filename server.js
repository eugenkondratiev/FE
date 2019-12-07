require('dotenv').config();
const homePath = require('./constants').HOME_PATH;
const express = require('express');
const app = express();
const path = require('path');
const fs = require(`fs`);

app.get('/download/:file.jpg', (req, res, next) => {
    try {
        const filePath = path.join(__dirname, `/img/${req.params.file}.jpg`);
        console.log(filePath);
        res.writeHead(200, {
            'Content-type': 'application/octet-stream',
            'Content-Disposition': `attachment; filename=${req.params.file}.jpg`
        });
        fs.createReadStream(filePath).pipe(res);
        // res.download(filePath);
    } catch (error) {
        console.error(error)
    }

})
const options = {
    dotfiles: 'ignore',
    etag: false,
    // extensions: ['htm', 'html'],
    index: 'index.html',
    // maxAge: '1d',
    redirect: false,
    setHeaders: function (res, path, stat) {
        // res.set( 'Hello', 'world' );
      res.set( 'x-timestamp', Date.now() );
      // res.set( 'content-type', 'application/octet-stream' );
    }
  };

// app.use(express.static('html-css/task-3/public'))
app.use(express.static(homePath, options));
app.use(express.static(homePath + '/public', options));


app.get('/', (req, res, next) => {
    res.sendFile(homePath + '/index.html', err => {
        // res.sendFile('./index.html', err => {
        if (err) console.log(err.message);
    })
})


app.listen(process.env.PORT, () => {
    console.log(`Server running on ${process.env.HOST}:${process.env.PORT}`)
});
