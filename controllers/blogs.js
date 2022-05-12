const blogsRouter = require('express').Router()
const Blog = require('../models/blog')

blogsRouter.get('/', (req, res) => {
  Blog.find({})
    .then(blogs => {
      res.json(blogs)
    })
})

blogsRouter.post('/', (req, res, next) => {
  const blog = new Blog(req.body)

  blog.save()
    .then(result => {
      res.status(201).json(result)
    })
    .catch(error => next(error))
})

blogsRouter.delete('/:id', async (req, res) => {
  await Blog.findByIdAndRemove(req.params.id)
  res.status(204).end()
})

blogsRouter.put('/:id', async (req, res) => {
  const body = req.body
  const blog = {
    title: body.title,
    author: body.author,
    url: body.url,
    likes: body.likes,
  }
  await Blog.findByIdAndUpdate(req.params.id, blog, { new: true })
  res.json(blog)
})

module.exports = blogsRouter
