const mongoose = require('mongoose')

const characterSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    mainSaga: String,
    books: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Book' }],
    race: String,
    job: String,
    picture: { type: String, required: true },
    description: String
  },
  { timestamps: true }
)

module.exports = mongoose.model('Character', characterSchema)
// const Character = mongoose.model('characters', characterSchema, 'characters')
// module.exports = Character
