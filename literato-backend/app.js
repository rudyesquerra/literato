var express = require('express');
var bodyParser = require('body-parser')
var validator = require('express-validator')
var app = express();
var Book = require('./models').Book
var cors = require('cors')
var User = require('./models').User

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

app.get('/dbsearch/:title', (req, res) => {
    function myFunction(path){
        var uri_dec = decodeURIComponent(path)
        return uri_dec
    }
    var title = myFunction(req.params["title"])
    
  Book.findAll({
        where: {
            title:title,
        }
    }).then( (books) =>{
        res.json(books)
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

app.post('/user', (req, res) => {
    req.checkBody('email', 'Is required').notEmpty()
    req.getValidationResult()
        .then((validationErrors) => {
            if(validationErrors.isEmpty()){
                User.find({where: {email: req.body.email}}).then((user) => {
                    res.status(201)
                    res.json({user: user})
                }).catch((error) => {
                    res.status(400)
                    res.json({errors: {message: 'User not found'}})
                })
            } else {
                res.status(400)
                res.json({errors: {validations: validationErrors.array()}})
            }
        })
})

//for adding a user aka signup
app.post('/signup', (req, res) => {
  //checking that form is properly filled out
    req.checkBody('name', 'Is required').notEmpty()
    req.checkBody('email', 'Is required').notEmpty()
    req.checkBody('username', 'Is required').notEmpty()
    req.checkBody('password', 'Is required').notEmpty()
    req.checkBody('age', 'Is required').notEmpty()
    //checking for any errors from above lines
    req.getValidationResult()
      .then((validationErrors) => {
        //if no errors, go here
        if(validationErrors.isEmpty()){
          //create user according to models/user.js
          User.create({
            name: req.body.name,
            email: req.body.email,
            username: req.body.username,
            password: req.body.password,
            age: req.body.age
          }).then((user) => {
            //info sent with no errors
            res.status(201)
            res.json({user: user})
          })
          //if errors, go here
        }else {
          //info not sent
          res.status(400)
          res.json({errors: {validations: validationErrors.array()}})
        }
      })
})
//user login page - verify something has been entered to login fields
app.post('/login', (req, res) => {
    req.checkBody('email', 'Is required').notEmpty()
    req.checkBody('password', 'Is required').notEmpty()
    //verify correct email/pw for user
    req.getValidationResult()
        .then((validationErrors) => {
            if(validationErrors.isEmpty()){
                User.find({ where: {email: req.body.email} }).then((user) => {
                    if(user.verifyPassword(req.body.password)) {
                        res.status(201)
                        res.json({user: user})
                    }else{
                        res.status(400)
                        console.log('bad pass')
                        res.json({errors: {message: "User Not Found"}})
                    }
                }).catch((error)=> {
                    res.status(400)
                    console.log('user not found for real')
                    res.json({errors: {message: "User Not Found"}})
                })
            } else {
                res.status(400)
                console.log('validations failed')
                res.json({errors: {validations: validationErrors.array()}})
            }
        })
})

app.post('/books/destroy', (req, res) => {
    req.checkBody('id', 'Is required').notEmpty()
    Book.findById(req.body.id).then(function(book){
        book.destroy().then(function(book){
            Book.findAll().then((books) => {
                res.status(200)
                res.json({books: books})
            })
        })
    }).catch((error) => {
        res.json({errors: "Error, couldn't fetch Book"})
    })
})

module.exports = app
