const express = require('express');
const server = express();
const tasks = require('./routes/tasks');
const PORT = 3000;

server.use(express.json());
server.use('/tasks', tasks);

server.listen(`${PORT}`);