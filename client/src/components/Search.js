import React, { Component } from 'react'
import Suggestions from './CraigslistJobs'

class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      query: '',
      jobs: []
    }
  }

  componentDidMount = () => {
    fetch('http://localhost:3001/craigslist')
      .then(res => res.json())
      .then(data => this.setState({ jobs: data }));
  }

  filterArray() {
    const {jobs, query} = this.state;
    
    const lowerCaseQuery = query.toLowerCase();
    const filteredJobs = jobs.filter(job => {
    // jobs.filter(job => {
      return Object.keys(job).some(key => 
        job[key].toLowerCase().includes(lowerCaseQuery)) || !lowerCaseQuery
    })
    this.setState({
      jobs: filteredJobs
    })
  }

  handleSearch = () => {
    this.setState({
      query: this.search.value
    }, () => {
      if (this.state.query && this.state.query.length > 1) {
        if (this.state.query.length % 2 === 0) {
          this.filterArray()
        }
      } 
      else if (this.state.query.length < 1) {
        this.componentDidMount()
      }
    })
  }

  compare = (a,b) => {
    if (a > b) {
      return 1;
    } 
    else if (b < a) {
      return -1;
    }
    return 0;
  }
  // objs.sort(compare);
 
  render() {
    return (
      <form>
        <input type="text" id='Search' ref={input => this.search = input} onChange={this.handleSearch} placeholder='Search...'/>
        <p>{this.state.query}</p>
        <Suggestions jobs={this.state.jobs} /> 
      </form>
    )
  }
}

export default Search