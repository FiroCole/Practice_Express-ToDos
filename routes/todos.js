var express = require('express');
var router = express.Router();

// All actual paths start with  "/todos" (all paths are plural)
var todosCtrl = require("../controllers/todos"); //Ctrl is short for control and then we requrie it
// GET /todos
router.get("/", todosCtrl.index)

// Get /todos/new
router.get("/new", todosCtrl.new)

//  GEt /todos/:id
router.get("/:id", todosCtrl.show)

// GEt /todo/:id/edit
router.get("/:id/edit", todosCtrl.edit)

//POST /todos
router.post("/", todosCtrl.create)

// Delete /todos
router.delete("/:id", todosCtrl.delete)

// Delete /todos/:id
router.delete("/:id", todosCtrl.delete)

// PUT /todos/:id
router.put("/:id", todosCtrl.update)

module.exports = router;
