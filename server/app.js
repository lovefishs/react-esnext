const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const utils = require('./utils')

const app = express()
const COMMENTS_FILE = path.resolve(__dirname, '../data/comments.json')

// 设置静态资源目录
app.use(express.static('public'))

// body parse
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded


// 获取所有的评论
app.get('/api/comments', async (req, res) => {
  const comments = JSON.parse(await utils.readFile(COMMENTS_FILE))

  res.json({
    error_code: 0,
    message: '',
    data: comments,
  })
})

// 添加评论
app.post('/api/comments', async (req, res) => {
  const comments = JSON.parse(await utils.readFile(COMMENTS_FILE))
  const newComment = {
    id: Date.now(),
    author: req.body.author,
    comment: req.body.comment,
  }
  comments.push(newComment)

  await utils.writeFile(COMMENTS_FILE, JSON.stringify(comments, null, 2))

  res.json({
    error_code: 0,
    message: '',
    data: comments,
  })
})

// 删除评论
app.delete('/api/comments/:id', async (req, res) => {
  const id = Number(req.params.id)
  const result = {
    error_code: 0,
    message: '',
    data: null,
  }

  if (isNaN(id)) {
    Object.assign(result, {
      error_code: 201,
      message: 'Parameter Error',
    })
  }

  const comments = JSON.parse(await utils.readFile(COMMENTS_FILE)).filter(item => item.id !== id)

  await utils.writeFile(COMMENTS_FILE, JSON.stringify(comments, null, 2))

  res.json(result)
})

app.listen(3000, () => {
  console.log('Example app listening on port 3000!')
})
