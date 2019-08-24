import React, { Component } from 'react'
import '../App.js';
const uuidv4 = require('uuid/v4');


export class Filter extends Component {
//   () => {
//     checked: !this.state.checked
// }
  render() {
    return (
      <div>
        {this.props.keywords.map(keyword => (
            <span key={uuidv4()}> 
              <input type="checkbox" id={keyword} onClick={this.props.complete.bind(this, keyword)} checked={this.props.complete} onChange={this.props.checkHandler} />
              <label htmlFor={keyword}>{keyword}</label>
            </span>
        ))
        }
      </div>
    )
  }
}


export default Filter