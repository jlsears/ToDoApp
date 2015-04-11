



var firstTodo = new Todo({
  due_date: Date.now(),
  description: "My first do do item",
  title: "First",
  priority: 10,
  complete: false
});

firstTodo.save(function (err, first) {
  if (err) {
    return console.log(err);
  }
  console.log(first);
});

var app = express();






// getting-started.js
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
  console.log("There's a thing!");
});

//Setting end result web pages the user will see here (jls)
var routes = require('./routes/index');
var users = require('./routes/users');

var todoSchema = mongoose.Schema({
  due_date: Date,
  timestamp: { type: Date, default: Date.now},
  description: String,
  title: String,
  priority: Number,
  complete: Boolean
});

var Todo = mongoose.model('Todo', todoSchema);








// respond with "hello world" when a GET request is made to the homepage
// app.get('/', function(req, res) {
//   res.send('hello world');
// });

// POST method route
app.post('/todo', function (req, res) {
  console.log('someone posted to me');
  res.send('POST request to the homepage');
});
