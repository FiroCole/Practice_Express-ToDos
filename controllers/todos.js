  const Todo = require("../models/todo")
  // controllers/todos.js
  module.exports = {
    index,
    show,
    new: newTodo,
    create,
    delete: deleteTodo,
    edit,
    update,
  };

  function deleteTodo(req, res) {
    Todo.deleteOne(req.params.id);
    res.redirect('/todos');
  }

  function update(req, res) {
    req.body.done = !!req.body.done;
    Todo.update(req.params.id, req.body);
    res.redirect(`/todos/${req.params.id}`)
  }
  function edit(req,res) {
    const todo = Todo.getOne(req.params.id)
    res.render("todos/edit", {
      title: "Edit To-do",
      todo
    });
  }

function create(req, res) {
  console.log(req.body);
  //modeles are responsible for crud'ing the data
  Todo.create(req.body);
  //Always do redirect when chagne data
  res.redirect("/todos");
}
  
function newTodo(req,res) {
  res.render("todos/new", {
    title: "New To-do"
  })
}

function show(req,res) {
    res.render("todos/show", {
      title: "To-do Details",
        todo : Todo.getOne(req.params.id)
    });
}

  function index(req, res) {
    res.render('todos/index', {
      todos: Todo.getAll(),
      title: "All To-do's",
    });
  }