import React from 'react';
import axios from 'axios';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchDate: ''
    }
  }

  render() {
    return (
      <div>
        <input type='text' onChange={this.props.handleChange}/>
        <input type='submit' value='Search a Date' onClick={this.props.searchDate}/>
      </div>
    )
  }
}

export default Search;
