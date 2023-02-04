const BlogModel = require('../../Model/admin/Blog')

// GET - All Blogs
exports.allBlogs = (req, res) => {
    BlogModel.find((error, data) => {
        console.log(data)
        if (!error) {
            res.status(200).send({ success: true, msg: "All Blogs data from API fetched Successfully !", displayBlogs: data })
        }
    })
}

// GET - Single Blog
exports.singleBlog = (req, res) => {

    const blogID = req.params.id

    BlogModel.findById(blogID)
        .then(data => {
            res.status(200).send({ success: true, msg: `Blog ID ${blogID} from API fetched Successfully !`, singleBlogData: data })
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating User"
            })
        })
}

// POST - Add Blog
exports.createBlog = async (req, res) => {
    //console.log(req.body)
    if (!req.body) {
        res.status(400).send({ message: "Please fill all the input fields." })
    }

    const Blog = new BlogModel({
        blogName: req.body.blogName,
        blogDescription: req.body.blogDescription,
        blogQuote: req.body.blogQuote,
        blogImage: req.file.filename
    })

    await Blog.save()
        .then(data => {
            res.status(200).send({ success: true, msg: "Blog data created using API successfully!", blogData: data })
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating a Blog"
            })
        })
}

// PUT - Edit Blog
exports.updateBlog = (req, res) => {
    if (!req.body) {
        res.status(400).send({ message: "Please fill all the input fields." })
    }

    const blogID = req.params.id
    const blogName = req.body.blogName
    const blogDescription = req.body.blogDescription
    const blogQuote = req.body.blogQuote
    const blogImage = req.file.filename

    BlogModel.findById(blogID)
        .then(async result => {
            result.blogName = blogName
            result.blogDescription = blogDescription
            result.blogQuote = blogQuote
            result.blogImage = blogImage

            await result.save()
                .then(data => {
                    res.status(200).send({ success: true, msg: `Blog edited using API successfully !`, editedBlogData: data })
                })
                .catch(err => {
                    res.status(500).send({ message: err.message || "Some error occurred while creating a Blog" })
                })
        })
}

// DELETE - Blog
exports.deleteBlog = (req, res) => {
    const blogID = req.params.id

    console.log('blogID Value: ', blogID)

    BlogModel.deleteOne({ _id: blogID })
        .then(data => {
            res.status(200).send({ success: true, msg: `Data with Blog ID [${blogID}] using API deleted Successfully !`, DeletedBlog: data })
        })
        .catch(error => {
            console.log(`Error: ${error}`)
        })
}