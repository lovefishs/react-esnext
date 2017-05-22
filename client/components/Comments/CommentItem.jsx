import React from 'react'
import PropTypes from 'prop-types'

const handleGroupItemMouse = (event) => {
  event.stopPropagation()

  const method = event.type === 'mouseenter' ? 'add' : 'remove'
  event.currentTarget.classList[method]('active')
}
const handleDeleteBtnClick = (event) => {
  document.dispatchEvent(new CustomEvent('comment.delete', {
    detail: event.currentTarget.dataset.id,
  }))
}

const CommentItem = ({ id, author, comment }) => {
  return (
    <li className="list-group-item" onMouseEnter={handleGroupItemMouse} onMouseLeave={handleGroupItemMouse}>
      <span>{author}: {comment}</span>
      <button type="button" className="btn btn-danger btn-sm" style={{ position: 'absolute', top: '50%', right: '10px', transform: 'translate3d(0, -50%, 0)' }} data-id={id} onClick={handleDeleteBtnClick}>x</button>
    </li>
  )
}

CommentItem.propTypes = {
  id: PropTypes.number.isRequired,
  author: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired,
}

export default CommentItem
