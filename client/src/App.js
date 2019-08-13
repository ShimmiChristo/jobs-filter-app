import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import Listings from './components/Listings';
import Search from './components/Search';

class App extends React.Component {
  // constructor(props) {
  //   super(props) 
  //   this.state = { jobs: [] }
  // }

  // componentDidMount() {
  //   fetch('http://localhost:3001/craigslist')
  //     .then(res => res.json())
  //     .then(jobs => this.setState({ jobs }));
  // }

  // function App() {
  render () {
    return (
      <div>
        <Search />
        {/* <Listings /> */}
      </div>
    );
  }
}

export default App;
