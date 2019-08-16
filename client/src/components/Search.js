import React, { Component } from 'react'
import Suggestions from './CraigslistJobs'
import Keywords from './Filter'

class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      query: '',
      jobs: [],
      descending: false,
      keywords: ['react']
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

  filterKeyWords = () => {
    const { keywords, jobs } = this.state;
    const filteredWords = jobs.filter(job => {
      // return Object.keys(job).some(keyword => 
      //   job[keyword].includes(keywords)
      // );
      return Object.keys(job).some(keyword => 
        keywords.indexOf(job[keyword] !== -1)
      );
    })
    console.log(filteredWords);
    // this.setState({
      // jobs: filteredWords
    // })
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
        let compare = 0;
        if(a.date > b.date) compare = 1;
        if(a.date < b.date) compare = -1;
          return (
            e.target.classList.contains('descending') ? compare * -1 : compare
          );
      });

    this.setState({ 
      descending: !descendingStatus,
      jobs: jobItems
    })
  }
 
  render() {
    return (
      <form>
        <input type="text" id='Search' ref={input => this.search = input} onChange={this.handleSearch} placeholder='Search...'/>
        <Keywords keywords={this.state.keywords} />
        <div onClick={this.filterKeyWords}>Filter Keywords</div>
        <div id="nav">
          <div className="nav-title">Title</div>
          <div className={`new-date${this.state.descending ? ' descending' : ''}`} onClick={ this.compare.bind(this) }>Date</div>
          <div className="nav-description">Description</div>
        </div>
        <Suggestions jobs={this.state.jobs} /> 
      </form>
    )
  }
}

export default Search