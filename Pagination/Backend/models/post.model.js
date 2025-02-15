const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    postTitle: {
        type: String,
        required: true
    },
    postDescription: {
        type: String,
        required: true
    }
})

const post = mongoose.model('Post', postSchema)

module.exports = post