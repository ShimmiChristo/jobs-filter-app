import React from 'react';
import '../App.css';

class Listings extends React.Component {
  constructor(props) {
    super(props) 
    this.state = { jobs: [] }
  }
  // componentDidMount() {
  //   fetch('http://localhost:3001/craigslist')
  //     .then(res => res.json())
  //     .then(jobs => this.setState({ jobs }));
  // }

  render() {
    return (
       <div className="App Listings">
          <h1>Craigslist Jobs</h1>
          <div> 
            <h2>Title</h2>
            <div className="craigslist-jobs">
              {this.state.jobs.map(job => 
                <div key={job.link}>
                  <div className="title">{job.title}</div>
                  <div className="date">{job.date}</div>
                  <div className="description">
                    <a className="link" href={job.link}>{job.link}</a>
                    <p>{job.description}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div>
            <h2></h2>
          </div>
      </div>
    );
  }
}



export default Listings;
