let tasks = require('../tasks');

const getTask = (req, res) => {
  res.send(tasks);
};

const getTaskById = (req, res) => {
  const iD = req.params.id;
  try {
    res.send(tasks[iD]);
  }
  catch {
    res.send('No task found with this id');
  }
};

const addTask = (req, res) => {
  let task = req.body;
  if (task.id === undefined) {
    task.id = 1 + Number(tasks[tasks.length - 1].id);
  }
  if (task.isComplete === undefined) {
    task.isComplete = false;
  }
  tasks.push(task);
  res.send(tasks);
};

const changeCompleteStatus = (req, res) => {
  let task = req.body;
  tasks = tasks.reduce((acc, cuu) => {
    if (cuu.id === task.id) {
      cuu.taskName = task.taskName;
      cuu.isComplete = task.isComplete;
    }
    return [...acc, cuu];
  }, []);
  res.send(tasks);
};

const deleteTask = (req, res) => {
  const iD = req.params.id;
  tasks = tasks.filter(item => item.id != iD);
  res.send(tasks);
};

const deleteAll = (req, res) => {
  tasks.splice(0, tasks.length);
  res.send(tasks);
};

module.exports = { getTask, getTaskById, addTask, changeCompleteStatus, deleteTask, deleteAll };