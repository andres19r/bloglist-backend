const _ = require('lodash')

const dummy = (blogs) => {
  return 1
}

const totalLikes = (blogs) => {
  return blogs.reduce((acc, el) => acc + el.likes, 0)
}

const favoriteBlog = (blogs) => {
  const maxLikes = Math.max(...blogs.map(el => el.likes))
  const maxBlog = blogs.find(el => el.likes === maxLikes)
  return {
    title: maxBlog.title,
    author: maxBlog.author,
    likes: maxBlog.likes
  }
}

const mostBlogs = (blogs) => {
  const authors = _.countBy(blogs, 'author')
  const maxBlogs = Math.max(...Object.values(authors))
  for (const prop in authors) {
    if (authors[prop] === maxBlogs) {
      return {
        author: prop,
        blogs: authors[prop]
      }
    }
  }
}

const mostLikes = (blogs) => {
  const maxLikes = Math.max(...blogs.map(el => el.likes))
  const blog = blogs.find(el => el.likes === maxLikes)
  return {
    author: blog.author,
    likes: maxLikes
  }
}

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs,
  mostLikes
}
