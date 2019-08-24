import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class ListingItem extends Component {
  render() {
    return (
         <div className='cl-listing'>
            <div className='cl-title'>{this.props.job.title}</div>  
            <br></br> 
            <div className='cl-date'>{this.props.job.date}</div>  
            <br></br> 
            <div className="cl-description">{this.props.job.description}</div> 
            <div className="cl-link"><a href={this.props.job.link}>Link</a></div> 
            <div className="cl-platform">{this.props.job.platform}</div> 
          </div>
    )
  }
}

// PropTypes
ListingItem.propTypes = {
  job: PropTypes.object.isRequired
}

export default ListingItem;
