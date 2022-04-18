const express = require('express');
const router = express.Router();
const habitsController = require('../controllers/habits');

router.get('/', habitsController.index);
router.get('/:id', habitsController.show);
router.put('/:id', habitsController.update);
router.delete('/:id', habitsController.destroy);

module.exports = router;

// API design - our base url is /habits meaning that in order to 