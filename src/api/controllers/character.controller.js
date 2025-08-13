const Character = require('../models/character.model')
const mongoose = require('mongoose')

exports.getAllCharacters = async (req, res) => {
  try {
    const characters = await Character.find().populate('books')
    return res.status(200).json(characters)
  } catch (error) {
    return res.status(400).json('Ha ocurrido un error ❌')
  }
}

exports.getCharacterById = async (req, res) => {
  try {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json('ID no válido ❌')
    }

    const character = await Character.findById(id).populate('books')

    if (!character) {
      return res.status(404).json('Personaje no encontrado ❌')
    }

    return res.status(200).json(character)
  } catch (error) {
    console.error(error)
    return res.status(500).json('Error al obtener el personaje ❌')
  }
}

exports.createCharacter = async (req, res) => {
  try {
    const newCharacter = new Character(req.body)
    const characterSaved = await newCharacter.save()
    return res.status(201).json(characterSaved)
  } catch (error) {
    return res.status(400).json('Ha ocurrido un error ❌')
  }
}

exports.updateCharacter = async (req, res) => {
  try {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json('ID no válido ❌')
    }

    const existingCharacter = await Character.findById(id)
    if (!existingCharacter) {
      return res.status(404).json('Personaje no encontrado ❌')
    }

    const updatedData = { ...existingCharacter.toObject(), ...req.body }

    if (req.body.books) {
      updatedData.books = Array.from(
        new Set([
          ...existingCharacter.books.map((book) => book.toString()),
          ...req.body.books.map((book) => book.toString())
        ])
      )
    }

    const characterUpdated = await Character.findByIdAndUpdate(
      id,
      updatedData,
      { new: true }
    )
    return res.status(200).json(characterUpdated)
  } catch (error) {
    console.error(error)
    return res.status(400).json('Ha ocurrido un error ❌')
  }
}

exports.removeDataFromCharacterArray = async (req, res) => {
  try {
    const { id } = req.params
    const { field, value } = req.body

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json('ID de personaje no válido ❌')
    }

    const validFields = ['books']
    if (!validFields.includes(field)) {
      return res.status(400).json('Campo no válido ❌')
    }

    let updateArray = {}

    if (Array.isArray(value)) {
      updateArray = { $pullAll: { [field]: value } }
    } else {
      updateArray = { $pull: { [field]: value } }
    }

    const updatedCharacter = await Character.findByIdAndUpdate(
      id,
      updateArray,
      { new: true }
    )

    if (!updatedCharacter) {
      return res.status(404).json('Personaje no encontrado ❌')
    }

    return res.status(200).json(updatedCharacter)
  } catch (error) {
    console.error(error)
    return res.status(500).json('Error al eliminar el dato ❌')
  }
}

exports.deleteCharacter = async (req, res) => {
  try {
    const { id } = req.params
    const newCharacter = new Character(req.body)
    newCharacter._id = id
    const characterDeleted = await Character.findByIdAndDelete(id)
    return res.status(201).json({
      message: 'Character deleted ✅',
      characterDeleted: characterDeleted
    })
  } catch (error) {
    return res.status(400).json('Ha ocurrido un error ❌')
  }
}
