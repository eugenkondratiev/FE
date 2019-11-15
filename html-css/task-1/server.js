require('dotenv').config();

const express = require('express');
const app = express();
const path = require('path');
const fs = require(`fs`);

app.get('/download/:file.jpg', (req, res, next) => {
    try {
        const filePath = path.join(__dirname, `/img/download/${req.params.file}.jpg`);
        res.writeHead(200, {
            'Content-type': 'application/octet-stream',
            'Content-Disposition': 'attachment; filename=' + filePath
        });
        fs.createReadStream(filePath).pipe(res);
        // res.download(filePath);
    } catch (error) {
        console.error(error)
    }

})

app.use(express.static('html-css/task-1'))


app.get('/', (req, res, next) => {
    res.sendFile('./index.html', err => {
        if (err) console.log(err.message);
    })
})


app.listen(process.env.PORT, () => {
    console.log(`Server running on ${process.env.HOST}:${process.env.PORT}`)
});
