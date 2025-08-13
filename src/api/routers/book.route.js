const bookRouter = require('express').Router()
const {
  getAllBooks,
  getBookById,
  createBook,
  updateBook,
  removeDataFromBookArray,
  deleteBook
} = require('../controllers/book.controller')

bookRouter.get('/', getAllBooks)
bookRouter.get('/:id', getBookById)
bookRouter.post('/', createBook)
bookRouter.put('/:id', updateBook)
bookRouter.patch('/:id/remove-data-from-book-array', removeDataFromBookArray)
bookRouter.delete('/:id', deleteBook)

module.exports = bookRouter
