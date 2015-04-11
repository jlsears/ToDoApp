var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');


var todoSchema = mongoose.Schema({
  due_date: Date,
  description: String,
  title: String,
  priority: Number,
  complete: Boolean
});

var Todo = mongoose.model('Todo', todoSchema);

// module.exports = Todo;

/*GET todo page. */
router.get('/', function(req, res, next) {
    return Todo.find(function (err, monkey) {
        if(!err) {
            res.render('todo', {
            greeting: 'Howdy',
            tasks: monkey
          });
          console.log(tasks);
        }else {
         return console.log(err);
        }
    });
});

/*POST form. */
router.post('/', function(req, res) {
    new Todo({
        due_date: req.body.due_date,
        description: req.body.description,
        title: req.body.title,
        priority: req.body.priority,
        complete: req.body.complete
    }).save(function (err, task) {
    if(err) {
    return console.error(err);
    }
    console.log(task);
  });

  res.redirect('todo');
})

module.exports = router;

