import React, { Component } from 'react'
import Suggestions from './CraigslistJobs'

class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      query: '',
      jobs: [],
      descending: false
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

  compare = (e) => {
      const descendingStatus = this.state.descending;
      const jobItems = [...this.state.jobs].sort((a,b) =>  {
        if(a.date > b.date) return 1;
        if(a.date < b.date) return -1;
        return 0;
      });

    e.target.classList.contains('descending') ? console.log('yes') : console.log('no')
      
    this.setState({ 
      jobs: jobItems,
      descending: !descendingStatus
    })
  }
 
  render() {
    return (
      <form>
        <input type="text" id='Search' ref={input => this.search = input} onChange={this.handleSearch} placeholder='Search...'/>
        <div id="nav">
          <div className="nav-title">Title</div>
          <div className={`new-date${this.state.descending ? ' descending' : ''}`} onClick={ this.compare(e) }>Date</div>
          <div className="nav-description">Description</div>
        </div>
        {/* <p>{this.state.query}</p> */}
        <Suggestions jobs={this.state.jobs} /> 
      </form>
    )
  }
}

export default Search