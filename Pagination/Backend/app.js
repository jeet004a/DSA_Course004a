const express = require('express')
const app = express()
const PORT = 8000
const postRouter = require('./routes/routes')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const bodyparser = require('body-parser')

const StartServer = () => {
    app.use(express.json())
    app.use(bodyparser.urlencoded({ extended: true }))
    dotenv.config()
    app.listen(PORT, () => {
        console.log(`Server Started at port ${PORT}`)
    })

    mongoose.connect(process.env.DB_URL).then(() => {
            console.log('DB Connected')
        })
        .catch((error) => {
            console.log(error)
        })
    app.use('/post', postRouter)
}

StartServer()