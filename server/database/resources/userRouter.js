const userRouter = require ('express').Router();
const User = require('./user.js');
const userCtrl = require('./userController.js');
const bcrypt = require('bcrypt');
const { Callbacks } = require('jquery');

userRouter.route('/signup')
    .post((req, res)=>{
      userCtrl.create(req.body, (err, data)=>{
        if (err) {
          res.sendStatus(400);
        } else {
          res.sendStatus(200);
        }
      });   
      // console.log(req.body);
    });

userRouter.route('/login')
    .post((req, res) => {
      userCtrl.find({ username: req.body.username }, (err, data) => {
        if (err) {
          res.sendStatus(500);
        } else if (data.length === 0) {
          res.status(404).send('user not found');
        } else {
          var newHash = bcrypt.hashSync(req.body.password, data[0]._doc.salt);
          if (newHash === data[0]._doc.password) {
            res.sendStatus(200);
          } else {
            res.status(400).send('password incorrect');
          }
        }
      });
    });
userRouter.route('/removeuser')
    .delete((req, res)=>{
      userCtrl.delete(req.body, (err,data)=>{
        if(err){
          res.sendStatus(500)
        }else{
          res.json(data)
        }
      })

    });

    
module.exports = userRouter;