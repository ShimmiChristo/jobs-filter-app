import React, { Component } from 'react';
import './App.css';
import Search from './components/Search';
import Filter from './components/Filter';
import Listings from './components/Listings';
import filter from './logic/filter';
import  "./styles.scss"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      query: '',
      jobs: [],
      descending: false,
      keywords: ['javascript', 'react', 'node', 'web'],
      filterKeywords: []
    }
  }

  componentDidMount = () => {
    fetch('http://localhost:3001/craigslist')
      .then(res => res.json())
      .then(data => this.setState({ jobs: data }));
  }

  filterJobs = () => {
    const { filterKeywords, jobs } = this.state;

    let filterJobs = jobs.filter (val => {
      for(let i=0; i < filterKeywords.length; i++) {
        if(Object.keys(val).some(key => 
          val[key].indexOf(filterKeywords[i]) !== -1)  
        )
        // console.log(val)
        // return jobs.length > 0 ?  val : this.componentDidMount();
        // if (val > 0) {
        //   return val;
        // }
        return val;
      }
    })
        // this.setState({
        //   jobs: filterJobs
        // })
    
  }

  complete = (button) => {
    console.log('set state');
    console.log(button)
    if (this.state.keywords.includes(button) !== true) {
      this.setState({
        complete: !true
      })
    }
  }

  handleCheck = (e) => {
    this.setState(
      filter(this.state, e),
      () => {
        const { filterKeywords, jobs } = this.state;
        console.log(filterKeywords);
        let filterWords = jobs.filter(val => {
          for(let i=0; i < filterKeywords.length; i++) {
            if (
              Object.keys(val).some(key =>
                val[key].indexOf(filterKeywords[i]) !== -1)
            )
              return val;
          }
        })
        this.setState({
          jobs: filterWords
        })
    })
  }

  render () {
    return (
      <div>
        <div className="filter-section">
          {/* <Search /> */}
          <Filter 
            keywords={ this.state.keywords } 
            jobs={ this.state.jobs } 
            checkHandler={ this.handleCheck }
          />
        </div>
        <div className="cl-jobs">
          <Listings jobs={ this.state.jobs } />
        </div>

      </div>
    );
  }
}

export default App;
