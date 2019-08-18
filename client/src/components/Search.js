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
      keywords: []
    }
  }

  componentDidMount = () => {
    fetch('http://localhost:3001/craigslist')
      .then(res => res.json())
      .then(data => this.setState({ jobs: data }));
  }
  
  filterSubmit = () => {
    const { keywords, jobs } = this.state;
    let filterWords = jobs.filter(val => {
      for(let i=0; i < keywords.length; i++) {
        if (
          Object.keys(val).some(key =>
            val[key].indexOf(keywords[i]) !== -1)
        )
          return val;
      }
    })
    this.setState({
      jobs: filterWords
    })
  }

  handleSubmit = (e) => {
    const { keywords } = this.state;
    e.preventDefault();
    if (this.search.value.length >= 1 ) {
      this.setState(
        {
          keywords: [...keywords, this.search.value]
        }, () => {
          this.filterSubmit();
        })
      this.search.value = "";
    } 
  }
  
  filterArray() {
    const {jobs, query} = this.state;
    const lowerCaseQuery = query.toLowerCase();
    const filteredJobs = jobs.filter(job => {
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
        <input type="text" id='Search' ref={input => this.search = input}  placeholder='Search...'/>
        <button type="button" id="submit" onClick={this.handleSubmit}> Submit </button>
        <Keywords keywords={this.state.keywords} />
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