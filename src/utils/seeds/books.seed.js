const mongoose = require('mongoose')
const Book = require('../../api/models/book.model')
const books = require('../../data/books.data')

const runSeed = async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://BBDD_DISCWORLD_admin:ARbh1Zhdi0By9upe@cluster0.aucemyq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
    )

    await Book.collection.drop()
    console.log('Eliminated books')

    await Book.insertMany(books)
    console.log('Printed books')

    await mongoose.disconnect()
    console.log('Disconnected from database')
  } catch (error) {
    console.error('❌ Error running books seed:', error)
    process.exit(1)
  }
}

runSeed()
