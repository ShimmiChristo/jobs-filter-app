import React, { Component } from 'react';
import './Listings.css';
import '../App.js';
import ListingItem from './ListingItem';
import PropTypes from 'prop-types';

const uuidv4 = require('uuid/v4');

class Listings extends Component {
    render() {
      return (
        this.props.jobs.map(job => (
          <ListingItem  key={uuidv4()} job={job}/>
        ))
      );
    }
}

// PropTypes
Listings.propTypes = {
  jobs: PropTypes.array.isRequired
}

export default Listings;