import React, { Component } from 'react'
import PropTypes from 'prop-types'

import CommentItem from './CommentItem'

class CommentList extends Component {
  constructor (props) {
    super(props)

    this.handleGroupItemMouse = this.handleGroupItemMouse.bind(this)

    this.state = {}
  }

  handleGroupItemMouse (event) {
    event.stopPropagation()

    const method = event.type === 'mouseenter' ? 'add' : 'remove'
    event.currentTarget.classList[method]('active')
  }

  render () {
    const { comments } = this.props

    return (
      <ul className="list-group">
        {comments.map(item => <CommentItem key={item.id} {...item} />)}
      </ul>
    )
  }
}

CommentList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    author: PropTypes.string.isRequired,
    comment: PropTypes.string.isRequired,
  })).isRequired,
}
CommentList.defaultProps = {
  comments: [],
}

export default CommentList
