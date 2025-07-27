const bookRouter = require('express').Router()
const {
  getAllBooks,
  getBookById,
  createBook,
  updateBook,
  deleteBook
} = require('../controllers/book.controller')

bookRouter.get('/', getAllBooks)
bookRouter.get('/:id', getBookById)
bookRouter.post('/', createBook)
bookRouter.put('/:id', updateBook)
bookRouter.delete('/:id', deleteBook)

module.exports = bookRouter
