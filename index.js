const express = require("express")
const path = require('path')
const app = express()

const mongoose = require("./db/mongoose")

// Mongoose Models
const {List, Task} = require("./db/models/")

// MIDDLEWARE
app.use(express.json())
app.use(require("cors")())


// routes // 

// get/list - get all lists
app.get("/lists", (req, res) => {
  // return an array of all the lists in the database
  List.find({}).then((lists) => {
  res.send(lists);
  });
})

app.get("/lists/:listId/tasks/:taskId", (req, res) => {
  Task.findOne({
    _id: req.params.taskId,
    _listId: req.params.listId
  }).then((lists)=> {
    res.send(lists);
  })
})



// post/list - post a new list
app.post("/lists", (req, res) => {
  // create a new list and return it  back to the user
  let title = req.body.title;
  // list info fields will be passed via JSON request body
  
  let newList = new List({
    title
  })

  // list is saved returned
  newList.save().then((listDoc) => {
    res.send(listDoc)
  })
})

// update specified list
app.put("/lists/:id", (req, res) => {
  // update the specified list with the new valued
  List.findOneAndUpdate({ _id: req.params.id }, {$set: req.body}).then(() => {
  res.sendStatus(200)
})
});

// delete list
app.delete("/lists/:id", (req, res) => {
  List.findOneAndRemove({ _id: req.params.id}).then((removedListDoc)=> {
    res.send(removedListDoc)
  })
})


// get all tasks for a specific list
app.get("/lists/:listId/tasks", (req, res) => {
  Task.find({
    _listId: req.params.listId
  }).then((tasks) => {
    res.send(tasks)
  })
})

// post task to a specific list
app.post("/lists/:listId/tasks", (req, res) => {
  let newTask = new Task({
    title: req.body.title,
    body: req.body.body,
    _listId: req.params.listId
  });
  newTask.save().then((newTaskDoc) => {
    res.send(newTaskDoc)
  })
})

// patch update a specific task to a specific list - specified by list id and task id.
app.put("/lists/:listId/tasks/:taskId", (req, res) => {
  Task.findByIdAndUpdate({_id: req.params.taskId, _listId: req.params.listId}, {
    $set: req.body
  }).then(() => {
    res.send({msg: "updated"})
  })
})

// delete tasks
app.delete("/lists/:listId/tasks/:taskId", (req, res) => {
  Task.findByIdAndDelete({_id: req.params.taskId, _listId: req.params.listId}).then((removed) => {
    res.send(removed)
  })
})

// delete all tasks for a specific list
app.delete("/lists/:listId/tasks/all", (req, res) => {
  Task.findByIdAndDelete({_listId: req.params.listId}).then((removed) => {
    res.send(removed)
  })
})


// if (process.env.NODE_ENV === 'production') {
  // Serve only the static files form the dist directory
  app.use(express.static(__dirname + '/frontend/dist/frontend'));
  app.get('/*', function(req,res) {  
  res.sendFile(path.join(__dirname+'/frontend/dist/frontend/index.html'));
  });
// }

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log("running on " + PORT)
})