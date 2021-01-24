const express = require('express');
const {
  UpdateTask,
  AddNewTask,
  DeleteTask,
} = require('../controllers/userTask');
const { validateUserTaskBodyRequest } = require('../middlewares');

const router = express.Router();

router.post('/users/tasks/create', validateUserTaskBodyRequest, AddNewTask);
router.put('/users/tasks/:id', validateUserTaskBodyRequest, UpdateTask);
router.delete('/users/tasks/:id', DeleteTask);

module.exports = router;
