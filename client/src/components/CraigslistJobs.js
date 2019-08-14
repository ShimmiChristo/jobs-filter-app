import React from 'react'
const uuidv4 = require('uuid/v4');

const Suggestions = (props) => {
  const nav = <div id="nav"><div className="nav-title">Title</div><div className="nav-date">Date</div><div className="nav-description">Description</div></div>

  const options = props.jobs.map(r => (
    <div className='cl-listing' key={uuidv4()}>
      <div className='cl-title'>{r.title}</div>  <br></br> <div className='cl-date'>{r.date}</div>  <br></br> <div className="cl-description">{r.description}</div> 
    </div>
  ))
  return <div id="job-results">{nav}<div className="cl-jobs">{options}</div></div>
}

export default Suggestions 