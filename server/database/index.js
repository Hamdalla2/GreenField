// create user data base
const mongoose = require('mongoose');
var db = () => {
  mongoose.connect('mongodb+srv://gamesio:fwOQ12Ol9t6CiHnb@gamesio.h6rcl.mongodb.net/gamesio?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
      .then(res => console.log('connected to database'))
      .catch(err => console.log(err));
};

module.exports = db;


// export mongo
