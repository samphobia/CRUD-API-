const UserModel = require('../models/user.model');

exports.getUsers = (req, res) => {
   // console.log('here are all users');
   UserModel.getUsers((err, users) => {
      console.log('here are all users');
      if (err) {
         res.send(err);
      } else {
         res.json(users);
      }
   })
}

exports.getUserById = (req, res) => {
   // console.log('here is user by id');
   UserModel.getUserById(req.params.id, (err, user) => {
      if (err) {
         res.send(err);
      } else {
         res.json(user);
         console.log('here is user by id' , user);
      }
   })
}

exports.createNewUser = (req, res) => {
   const newUser = new UserModel(req.body);
   console.log('requset data: ', req.body);  
   if(req.body.constructor === Object && Object.keys(req.body).length === 0) {
      res.send(400).send({success: false, message: 'No data received'});
   }else{
      console.log('valid user data');
      UserModel.createUser(newUser, (err, user) => {
         if (err) {
            res.send(err);
         } else {
            res.json({status: 'success', message: 'User created successfully'});
         }
      })
   }
}

exports.updateUser = (req, res) => {
   const newUser = new UserModel(req.body);
   console.log('requset data: ', req.body);  
   if(req.body.constructor === Object && Object.keys(req.body).length === 0) {
      res.send(400).send({success: false, message: 'No data received'});
   }else{
      console.log('valid user data');
      UserModel.updateUser(req.params.id, newUser, (err, user) => {
         if (err) {
            res.send(err);
         } else {
            res.json({status: 'success', message: 'User update successfully'});
         }
      })
   }
}

// delete user
exports.deleteUser = (req, res) => {
   UserModel.deleteUser(req.params.id, (err, user) => {
      if (err) {
         res.send(err);
      } else {
         res.json({status: 'success', message: 'User deleted successfully'});
      }
   })
}