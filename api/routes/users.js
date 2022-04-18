const express = require('express')
const router = express.Router();
const usersController = require('../controllers/users')

router.get('/', usersController.index);
router.get('/:username', usersController.show);
router.put('/:username', usersController.update);
router.delete('/:username', usersController.destroy);

module.exports = router;