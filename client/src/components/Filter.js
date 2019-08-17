import React from 'react'
const uuidv4 = require('uuid/v4');


const Keywords = (props) => {
  const options = props.keywords.map(keyword => (
    <li key={uuidv4()}>
      {keyword}
    </li>
  ))
  return <div>{ options }</div>
}

export default Keywords