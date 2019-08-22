import React from 'react'
const uuidv4 = require('uuid/v4');

const Suggestions = (props) => {
  const options = props.jobs.map(r => (
    <div className='cl-listing' key={uuidv4()}>
      <div className='cl-title'>{r.title}</div>  
      <br></br> 
      <div className='cl-date'>{r.date}</div>  
      <br></br> 
      <div className="cl-description">{r.description}</div> 
      <div className="cl-link"><a href={r.link}>Link</a></div> 
      <div className="cl-platform">{r.platform}</div> 
    </div>
  ))
  return <div className="cl-jobs">{options}</div>
}

export default Suggestions 
