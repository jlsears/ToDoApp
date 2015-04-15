var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');


var todoSchema = mongoose.Schema({
  due_date: Date,
  description: {type: String, required: true},
  title: {type: String, required: true},
  priority: Number,
  // complete: {type: Boolean, required: true, default: false}
});

var Todo = mongoose.model('Todo', todoSchema);

// module.exports = Todo;

/*GET todo page. */
router.get('/', function(req, res, next) {
    return Todo.find(function (err, task) {
        if(!err) {
            res.render('todo', {
            greeting: 'Behold: the things that need doing',
            tasks: task,
          });
          console.log(task);
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
        priority: req.body.priority
        // complete: req.body.complete
    }).save(function (err, task) {
    if(err) {
      console.log(err);
      res.render("error", {
      error: {
        status: 500,
        stack: JSON.stringify(err.errors)
      },
      message: "No form results for you!"
      })
    } else {
      // res.render('todo', {
      // title: 'Todo created',
      // greeting: 'Huzzah!',
      // })  
      res.redirect('todo');
    }
    console.log(task);
  });

  // res.redirect('todo');
})

module.exports = router;

