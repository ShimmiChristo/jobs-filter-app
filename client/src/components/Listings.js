import React from 'react';
import '../App.css';
import '../App.js';
const uuidv4 = require('uuid/v4');

export default class Listings extends React.Component {

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
    );
}



export default Listings;
