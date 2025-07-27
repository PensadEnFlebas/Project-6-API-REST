const Character = require('../models/character.model')
const mongoose = require('mongoose')

exports.getAllCharacters = async (req, res) => {
  try {
    const characters = await Character.find().populate('books')
    res.json(characters)
    // return res.status(200).json(characters)
  } catch (error) {
    return res.status(400).json('Ha ocurrido un error ❌')
  }
}

exports.getCharacterById = async (req, res) => {
  try {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: 'ID no válido ❌' })
    }

    const character = await Character.findById(id).populate('books')

    if (!character) {
      return res.status(404).json({ message: 'Personaje no encontrado ❌' })
    }

    return res.status(200).json(character)
  } catch (error) {
    console.error(error)
    return res.status(500).json({ message: 'Error al obtener el personaje ❌' })
  }
}

exports.createCharacter = async (req, res) => {
  try {
    const newCharacter = new Character(req.body)
    const characterSaved = await newCharacter.save()
    res.status(201).json(characterSaved)
    // return res.status(201).json(characterSaved)
  } catch (error) {
    return res.status(400).json('Ha ocurrido un error ❌')
  }
}

exports.updateCharacter = async (req, res) => {
  try {
    const { id } = req.params
    const newCharacter = new Character(req.body)
    newCharacter._id = id
    const characterUpdated = await Character.findByIdAndUpdate(
      id,
      newCharacter,
      {
        new: true
      }
    )
    return res.status(201).json(characterUpdated)
  } catch (error) {
    return res.status(400).json('Ha ocurrido un error ❌')
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
