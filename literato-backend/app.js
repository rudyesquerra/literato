var express = require('express');
var bodyParser = require('body-parser')
var validator = require('express-validator')
var app = express();
var Book = require('./models').Book

app.use(express.static('public'))
app.use(bodyParser.json())
app.use(validator())

app.get('/', (req, res) => {
  res.json({message: 'API Example App'})
});
app.get('/books', (req, res) => {
  Book.findAll().then((books) => {
    res.status(200)
    res.json({books: books})
  })
})
app.post('/', (req, res) => {
    req.checkBody('title', 'Is required').notEmpty()
    req.checkBody('authors', 'Is required').notEmpty()
    req.checkBody('description', 'Is required').notEmpty()
    req.checkBody('images', 'Is required').notEmpty()
    req.getValidationResult()
      .then((validationErrors) => {
        if(validationErrors.isEmpty()){
          Book.create({
            title: req.body.title,
            author: req.body.authors,
            description: req.body.description,
            images: req.body.images
          }).then((book) => {
            res.status(201)
            res.json({book: book})
          })
        }else {
          res.status(400)
          res.json({errors: {validations: validationErrors.array()}})
        }
      })
  })
module.exports = app