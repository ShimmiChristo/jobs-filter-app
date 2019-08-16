import React from 'react'

const Keywords = (props) => {
  const options = props.keywords.map(keyword => (
    <ul>
      <li>{keyword}</li>
    </ul>
  ))
  return <div>{ options }</div>
}

export default Keywords