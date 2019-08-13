import React from 'react'

const Suggestions = (props) => {
  const options = props.jobs.map(r => (
    <li key={r.date}>
      {r.title}
    </li>
  ))
  return <ul>{options}</ul>
}

export default Suggestions