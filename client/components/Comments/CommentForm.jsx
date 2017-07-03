import React, { Component } from 'react'
import PropTypes from 'prop-types'

class CommentForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  }
  static defaultProps = {
    onSubmit: function () {},
  }
  constructor (props) {
    super(props)

    this.handleSubmit = this.handleSubmit.bind(this)

    this.state = {
      submitting: false,
    }
  }

  handleSubmit (event) {
    event.preventDefault()
    event.stopPropagation()

    const author = document.querySelector('#author').value.trim()
    const comment = document.querySelector('#comment').value.trim()

    this.props.onSubmit({
      author,
      comment,
    })
    this.setState({
      submitting: true,
    })

    setTimeout(() => {
      this.setState({
        submitting: false,
      })
    }, 3000)
  }

  render () {
    const { submitting } = this.state

    return (
      <form className="form-inline" onSubmit={this.handleSubmit}>
        <label className="sr-only" htmlFor="author">Author</label>
        <input type="text" className="form-control" id="author" name="author" placeholder="Author" />

        <label className="sr-only" htmlFor="comment">Comment</label>
        <div className="input-group">
          <div className="input-group-addon">@</div>
          <input type="text" className="form-control" id="comment" name="" placeholder="Comment" />
        </div>

        <button type="submit" className="btn btn-primary" disabled={submitting}>Submit</button>
      </form>
    )
  }
}

export default CommentForm
