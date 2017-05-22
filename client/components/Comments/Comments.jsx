import React, { Component } from 'react'

import { fetch } from 'utils/utils'
import CommentForm from './CommentForm'
import CommentList from './CommentList'

class Comments extends Component {
  constructor (props) {
    super(props)

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleCommentDelete = this.handleCommentDelete.bind(this)

    this.state = {
      comments: [],
    }
  }
  componentDidMount () {
    document.addEventListener('comment.delete', this.handleCommentDelete)

    fetch('/api/comments')
    .then(res => res.json())
    .then(json => {
      if (json.error_code === 0) {
        this.setState({
          comments: json.data,
        })
      }
    })
  }
  componentWillUnmount () {
    document.removeEventListener('comment.delete', this.handleCommentDelete)
  }

  handleCommentDelete (event) {
    const id = Number(event.detail)

    if (isNaN(id)) {
      return
    }

    fetch(`/api/comments/${id}`, {
      method: 'delete',
    })
    .then(res => res.json())
    .then(json => {
      if (json.error_code === 0) {
        this.setState({
          comments: this.state.comments.filter(item => item.id !== id),
        })
      }
    })
  }
  handleSubmit (values) {
    fetch('/api/comments', {
      method: 'post',
      body: JSON.stringify(values),
    })
    .then(res => res.json())
    .then(json => {
      if (json.error_code === 0) {
        this.setState({
          comments: json.data,
        })
      }
    })
  }

  render () {
    const { comments } = this.state

    return (
      <div>
        <h1>Comments</h1>

        <CommentForm onSubmit={this.handleSubmit} />

        <hr />

        <CommentList comments={comments} />

        <hr />
      </div>
    )
  }
}

export default Comments
