const express = require('express');
const app = express();

// serve up static files
app.use(express.static('public'));
// parse json and urlencoded data into req.body
app.use(express.json());
app.use(express.urlencoded());

app.get('/', (req, res, next) => {
    res.render("index");
})

app.listen(5000);