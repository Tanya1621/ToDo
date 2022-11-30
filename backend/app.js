const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
mongoose.connect('mongodb://localhost/todo', {
    useNewUrlParser: true,
    useUnifiedTopology: true,

})

app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));
app.use(require('./index'))

//routes
app.use(require("./index"))
app.use(require("./routes/todo"))

//server configures
app.listen(8000, () => console.log('I am listeng here'))
