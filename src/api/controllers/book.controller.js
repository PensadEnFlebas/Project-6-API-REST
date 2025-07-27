const Book = require('../models/book.model')
const mongoose = require('mongoose')

exports.getAllBooks = async (req, res) => {
  try {
    const books = await Book.find().populate('characters')
    res.json(books)
    // return res.status(200).json(books)
  } catch (error) {
    return res.status(400).json('Ha ocurrido un error ❌')
  }
}

exports.getBookById = async (req, res) => {
  try {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: 'ID no válido ❌' })
    }

    const book = await Book.findById(id).populate('characters')

    if (!book) {
      return res.status(404).json({ message: 'Libro no encontrado ❌' })
    }

    return res.status(200).json(book)
  } catch (error) {
    console.error(error)
    return res.status(500).json({ message: 'Error al obtener el libro ❌' })
  }
}

exports.createBook = async (req, res) => {
  try {
    const newBook = new Book(req.body)
    const bookSaved = await newBook.save()
    res.status(201).json(bookSaved)
    // return res.status(201).json(bookSaved)
  } catch (error) {
    return res.status(400).json('Ha ocurrido un error ❌')
  }
}

exports.updateBook = async (req, res) => {
  try {
    const { id } = req.params
    const newBook = new Book(req.body)
    newBook._id = id
    const bookUpdated = await Book.findByIdAndUpdate(id, newBook, {
      new: true
    })
    return res.status(201).json(bookUpdated)
  } catch (error) {
    return res.status(400).json('Ha ocurrido un error ❌')
  }
}

exports.deleteBook = async (req, res) => {
  try {
    const { id } = req.params
    const newBook = new Book(req.body)
    newBook._id = id
    const bookDeleted = await Book.findByIdAndDelete(id)
    return res
      .status(201)
      .json({ message: 'Book deleted ✅', bookDeleted: bookDeleted })
  } catch (error) {
    return res.status(400).json('Ha ocurrido un error ❌')
  }
}
