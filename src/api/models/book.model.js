const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    year: Number,
    mainSaga: String,
    subSagas: [{ type: String, required: true }],
    cover: { type: String, required: true },
    orderInSaga: Number,
    globalOrder: Number,
    characters: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Character' }]
  },
  { timestamps: true }
)

module.exports = mongoose.model('Book', bookSchema)
