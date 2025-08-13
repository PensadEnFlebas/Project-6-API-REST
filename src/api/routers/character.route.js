const characterRouter = require('express').Router()
const {
  getAllCharacters,
  getCharacterById,
  createCharacter,
  updateCharacter,
  removeDataFromCharacterArray,
  deleteCharacter
} = require('../controllers/character.controller')

characterRouter.get('/', getAllCharacters)
characterRouter.get('/:id', getCharacterById)
characterRouter.post('/', createCharacter)
characterRouter.put('/:id', updateCharacter)
characterRouter.patch(
  '/:id/remove-data-from-character-array',
  removeDataFromCharacterArray
)
characterRouter.delete('/:id', deleteCharacter)

module.exports = characterRouter
