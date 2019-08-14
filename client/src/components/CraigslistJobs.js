import React from 'react'

const Suggestions = (props) => {
  const options = props.jobs.map(r => (
    <div className='cl-listing' key={r.date}>
      <div className='cl-title'>{r.title}</div>  <br></br> <div className='cl-date'>{r.date}</div>  <br></br> <div className="cl-description">{r.description}</div> 
    </div>
  ))
  return <div className="cl-jobs">{options}</div>
}

export default Suggestions