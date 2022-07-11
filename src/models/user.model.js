var dbConn = require('../../config/db.config');

var User =function (user) {
   this.user_id = user.user_id;
   this.user_name = user.user_name;
   this.user_email = user.user_email;
   this.user_password = user.user_password;
}

User.getUsers = (result) => {
   dbConn.query('SELECT * FROM users', (err, res) => {
      if (err) {
         console.log('Error while fetching users: ', err);
         result(err, null);
      } else {
         console.log('Fetched users successfully: ', res);
         result(null, res);
      }
   }
   );
}

User.getUserById = (userId, result) => {
   dbConn.query('SELECT * FROM users WHERE user_id = ?', [userId], (err, res) => {
      if(err) {
         console.log('Error while fetching user by id: ', err);
         result(err, null);
      }else {
         console.log({status: true, message: 'user created succesfully', data: user.insertId} );
         result(null, res);
      }
   })
}

User.createUser = (newUser, result) => {
   dbConn.query('INSERT INTO users SET ?', newUser, (err, res) => {
      if(err) {
         console.log('Error while creating user: ', err);
         result(err, null);
      }else {
         console.log('Created user successfully: ', res);
         result(null, res);
      }
   })
}

User.updateUser = (userId, newUser, result) => {
   dbConn.query('UPDATE users SET ? WHERE user_id = ?', [newUser, userId], (err, res) => {
      if(err) {
         console.log('Error while updating user: ', err);
         result(err, null);
      }else {
         console.log('Updated user successfully: ', res);
         result(null, res);
      }
   })
}

//delete user
User.deleteUser = (userId, result) => {
   dbConn.query('DELETE FROM users WHERE user_id = ?', [userId], (err, res) => {
      if(err) {
         console.log('Error while deleting user: ', err);
         result(err, null);
      }else {
         console.log('Deleted user successfully: ', res);
         result(null, res);
      }
   })
}

module.exports = User;