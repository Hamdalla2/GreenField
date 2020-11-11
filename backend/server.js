const express = require('express');
const cors = require('cors');
const mongo = require('./database');

let app = express();

mongo();


app.use(cors());
app.use(express.static(__dirname + '/../frontend'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/user/signup', require('./middleware/hash.js'));
app.use('/user', require('./database/resources/userRouter'));


let port = 3000;

app.listen(port, () => {
  console.log('Listening on port: ' + port);
});


module.exports = app;

