const express = require('express');
const router = express.Router();

const { getTask, getTaskById, addTask, changeCompleteStatus, deleteTask, deleteAll } = require('../controller/tasks');

router.route('/').get(getTask).post(addTask).put(changeCompleteStatus).delete(deleteAll);
router.route('/:id').get(getTaskById).delete(deleteTask);

module.exports = router;