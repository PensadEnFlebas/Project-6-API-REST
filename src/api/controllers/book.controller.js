const Book = require('../models/book.model')
const mongoose = require('mongoose')

exports.getAllBooks = async (req, res) => {
  try {
    const books = await Book.find().populate('characters')
    return res.status(200).json(books)
  } catch (error) {
    return res.status(400).json('Ha ocurrido un error ❌')
  }
}

exports.getBookById = async (req, res) => {
  try {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json('ID no válido ❌')
    }

    const book = await Book.findById(id).populate('characters')

    if (!book) {
      return res.status(404).json('Libro no encontrado ❌')
    }

    return res.status(200).json(book)
  } catch (error) {
    console.error(error)
    return res.status(500).json('Error al obtener el libro ❌')
  }
}

exports.createBook = async (req, res) => {
  try {
    const newBook = new Book(req.body)
    const bookSaved = await newBook.save()
    return res.status(201).json(bookSaved)
  } catch (error) {
    return res.status(400).json('Ha ocurrido un error ❌')
  }
}

exports.updateBook = async (req, res) => {
  try {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json('ID no válido ❌')
    }

    const existingBook = await Book.findById(id)
    if (!existingBook) {
      return res.status(404).json('Libro no encontrado ❌')
    }

    const updatedData = { ...existingBook.toObject(), ...req.body }

    if (req.body.characters) {
      updatedData.characters = Array.from(
        new Set([
          ...existingBook.characters.map((character) => character.toString()),
          ...req.body.characters.map((character) => character.toString())
        ])
      )
    }

    const bookUpdated = await Book.findByIdAndUpdate(id, updatedData, {
      new: true
    })
    return res.status(200).json(bookUpdated)
  } catch (error) {
    console.error(error)
    return res.status(400).json('Ha ocurrido un error ❌')
  }
}

exports.removeDataFromBookArray = async (req, res) => {
  try {
    const { id } = req.params
    const { field, value } = req.body

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json('ID de libro no válido ❌')
    }

    const validFields = ['characters', 'subSagas']
    if (!validFields.includes(field)) {
      return res.status(400).json('Campo no válido ❌')
    }

    let updateArray = {}

    if (Array.isArray(value)) {
      updateArray = { $pullAll: { [field]: value } }
    } else {
      updateArray = { $pull: { [field]: value } }
    }

    const updatedBook = await Book.findByIdAndUpdate(id, updateArray, {
      new: true
    })

    if (!updatedBook) {
      return res.status(404).json('Libro no encontrado ❌')
    }

    return res.status(200).json(updatedBook)
  } catch (error) {
    console.error(error)
    return res.status(500).json('Error al eliminar el dato ❌')
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
