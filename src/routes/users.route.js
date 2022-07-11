const express = require('express');
const router = express.Router();

const UsersController = require('../controllers/users.controller');

router.get('/', UsersController.getUsers);

router.get('/:id', UsersController.getUserById);

router.post('/', UsersController.createNewUser);

router.put('/:id', UsersController.updateUser);

//delete user
router.delete('/:id', UsersController.deleteUser);

module.exports = router;