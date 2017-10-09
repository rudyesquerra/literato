const request = require('supertest')
const app = require('../app')

jest.mock('../models/book')

describe("App", ()=>{
    it("Tests the root path", ()=>{
        return request(app).get("/").then(response => {
            expect(response.statusCode).toBe(200)
        })
    })

    it("Lists books", () => {
        return request(app).get("/books").then(response => {
            expect(response.statusCode).toBe(200)
            expect(response.body.books[0].title).toBe('BOOK 1')
        })
    })

    it("Adds books", () => {
        return request(app).post("/books")
            .send({
                title:'BOOK 1',
                authors: 'You',
                description: 'a book',
                image:'asdfasdf'
        })
        .then(response => {
            expect(response.statusCode).toBe(201)
            expect(response.body.book.title).toBe('BOOK 1')
            expect(response.body.book.authors).toBe('You')
            expect(response.body.book.description).toBe('a book')
            expect(response.body.book.image).toBe('asdfasdf')
        })
    })

    it("Validates title when adding a book", ()=>{
      return request(app)
        .post("/books")
        .send({
            authors: 'You',
            description: 'a book',
            image:'asdfasdf'
        })
        .then(response =>{
            expect(response.statusCode).toBe(400)
            const error = response.body.errors.validations[0]
            expect(error.param).toBe('title')
            expect(error.msg).toBe('Is required')
        })
    })

    it("Validates authors when adding a book", ()=>{
      return request(app)
        .post("/books")
        .send({
            title:'BOOK 1',
            description: 'a book',
            image:'asdfasdf'
        })
        .then(response =>{
            expect(response.statusCode).toBe(400)
            const error = response.body.errors.validations[0]
            expect(error.param).toBe('authors')
            expect(error.msg).toBe('Is required')
        })
    })

    it("Validates description when adding a book", ()=>{
      return request(app)
        .post("/books")
        .send({
            authors: 'You',
            title: 'BOOK 1',
            image:'asdfasdf'
        })
        .then(response =>{
            expect(response.statusCode).toBe(400)
            const error = response.body.errors.validations[0]
            expect(error.param).toBe('description')
            expect(error.msg).toBe('Is required')
        })
    })

    it("Validates image when adding a book", ()=>{
      return request(app)
        .post("/books")
        .send({
            authors: 'You',
            description: 'a book',
            title:'BOOK 1'
        })
        .then(response =>{
            expect(response.statusCode).toBe(400)
            const error = response.body.errors.validations[0]
            expect(error.param).toBe('image')
            expect(error.msg).toBe('Is required')
        })
    })

    it("Deletes book", ()=>{
      return request(app)
        .post("/books/destroy")
        .then(response =>{
            expect(this.books).toBe(undefined)
        })
    })

})
