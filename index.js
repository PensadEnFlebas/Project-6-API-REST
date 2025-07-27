const express = require('express')
const dotenv = require('dotenv')
const { connectDB } = require('./src/config/db')
const path = require('path')

const bookRoutes = require('./src/api/routers/book.route')
const characterRoutes = require('./src/api/routers/character.route')

const app = express()

dotenv.config()
connectDB()

app.use(express.json())
app.use('/assets', express.static(path.join(__dirname, 'assets')))

app.use('/api/v1/characters', characterRoutes)
app.use('/api/v1/books', bookRoutes)

app.use((req, res) => {
  return res.status(404).json('Route NOT found ❌')
})

app.listen(3000, () => {
  console.log('Servidor levantado en: http://localhost:3000')
})
