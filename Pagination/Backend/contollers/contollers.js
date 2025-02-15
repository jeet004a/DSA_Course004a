const post = require('../models/post.model')
    // const Post = require('../models/post.model')

module.exports.CreatePost = async(req, res, next) => {
    try {

        const savepost = await post(req.body)
        await savepost.save()
        res.status(201).json(savepost)
            // res.status(201).json({ message: "Hi user" })
    } catch (error) {
        res.status(401).json({ errors: error })
    }
}


//Below is the function for pegination backend
module.exports.getPost = async(req, res, next) => {
    try {
        const page = req.query.page || 1
        const perPage = req.query.limit || 3
        const totalPosts = await post.countDocuments()
        const totalPages = Math.ceil(totalPosts / perPage)
        let next = 0
        let prev = 0
        let result = {}

        if (perPage * page < totalPosts) {
            result.next = {
                next: totalPosts - (perPage * page)
            }
        }
        if (perPage * page <= totalPosts && (page - 1) * perPage != 0) {
            result.prev = {
                prev: (page - 1) * perPage
            }
        }



        const alldata = await post.find().skip((page - 1) * perPage).limit(perPage).exec()

        result.results = { alldata, totalPages, page }
        res.status(200).json(result)
    } catch (error) {
        res.status(401).json({ errors: error })
    }
}