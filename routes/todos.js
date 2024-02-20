const express = require('express');
const router = express.Router();
const todosController = require('../controllers/todos');

// all actual paths start with "/todos"

// GET /todos
router.get('/', todosController.index);
// GET /todos/:id
router.get('/:id', todosController.show);

module.exports = router;
