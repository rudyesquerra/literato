var express = require('express');
var bodyParser = require('body-parser')
var validator = require('express-validator')
var app = express();
var Book = require('./models').Book
var cors = require('cors')

app.use(express.static('public'))
app.use(bodyParser.json())
app.use(validator())
app.use(cors())

app.get('/', (req, res) => {
    res.json({message: 'API Example App'})
});

app.get('/books', (req, res) => {
    Book.findAll().then((books) => {
        res.status(200)
        res.json({books: books})
    })
})

app.post('/books', (req, res) => {
    req.checkBody('title', 'Is required').notEmpty()
    req.getValidationResult()
        .then((validationErrors) => {
            if(validationErrors.isEmpty()){
                Book.create({
                    title: req.body.title,
                    authors: req.body.authors,
                    description: req.body.description,
                    image: req.body.image
                })
                .then((book) => {
                    res.status(201)
                    res.json({book: book})
                })
            }else {
                res.status(400)
                res.json({errors: {validations: validationErrors.array()}})
            }
        })
})

app.post('/books/destroy', (req, response) => {
    req.checkBody('id', 'Is required').notEmpty()
    Book.findById(req.body.id).then(function(book){
        response.status(200)
        response.json({book: book})
        book.destroy()
    }).catch((error) => {
        response.send("Error, couldn't fetch Book")
    })
})

module.exports = app
