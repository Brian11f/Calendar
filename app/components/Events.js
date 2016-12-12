import React from 'react'

const Event = ({ onClick, completed, text }) =>
  <li
    onClick={onClick}
    className={completed ? 'completed' : 'incomplete'}
  >
    {text}
  </li>

const propTypes = {
  onClick: React.PropTypes.func.isRequired,
  completed: React.PropTypes.bool.isRequired,
  text: React.PropTypes.string.isRequired
}

export default Object.assign(Event, propTypes)
