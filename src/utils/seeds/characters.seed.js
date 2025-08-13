const mongoose = require('mongoose')
const Character = require('../../api/models/character.model')
const characters = require('../../data/characters.data')

const runSeed = async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://BBDD_DISCWORLD_admin:ARbh1Zhdi0By9upe@cluster0.aucemyq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
    )

    await Character.collection.drop()
    console.log('Eliminated characters')

    await Character.insertMany(characters)
    console.log('Printed characters')

    await mongoose.disconnect()
    console.log('Disconnected from database')
  } catch (error) {
    console.error('❌ Error running characters seed:', error)
    process.exit(1)
  }
}

runSeed()
