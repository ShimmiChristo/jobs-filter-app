import React from 'react';
import './App.css';
import Search from './components/Search';
import Listings from './components/Listings';
import  "./styles.scss"

class App extends React.Component {
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

  render () {
    return (
      <div>
        <Search />
        <Listings jobs={ this.state.jobs } />
      </div>
    );
  }
}

export default App;
