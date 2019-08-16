import React from 'react'
const uuidv4 = require('uuid/v4');


const Keywords = (props) => {
  const options = props.keywords.map(keyword => (
    <ul key={uuidv4()}>
      <li>{keyword}</li>
    </ul>
  ))
  return <div>{ options }</div>
}

export default Keywords