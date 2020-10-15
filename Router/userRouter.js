const express = require('express');
const router = express.Router();

const User = require('./../Controllers/userController');

router.route('/api/v1/user/create').post(User.createUser);

router.route('/api/v1/user/lists').get(User.getUser);

router.route('/api/v1/user/:id/view').get(User.viewUser);

router.route('/api/v1/user/:id/update').patch(User.updateUser);

router.route('/api/v1/user/:id/delete').delete(User.deleteUser);

module.exports = router;