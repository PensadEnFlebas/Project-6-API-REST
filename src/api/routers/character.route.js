const characterRouter = require('express').Router()
const {
  getAllCharacters,
  getCharacterById,
  createCharacter,
  updateCharacter,
  deleteCharacter
} = require('../controllers/character.controller')

characterRouter.get('/', getAllCharacters)
characterRouter.get('/:id', getCharacterById)
characterRouter.post('/', createCharacter)
characterRouter.put('/:id', updateCharacter)
characterRouter.delete('/:id', deleteCharacter)

module.exports = characterRouter
