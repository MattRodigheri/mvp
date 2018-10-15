import React from 'react';
import axios from 'axios';
import css from './../styles/Search.css';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchDate: ''
    }
  }

  render() {
    return (
      <div className='search'>
        <input className='searchInput' type='date' maxLength="10" onChange={this.props.handleChange}/>
        <input className='searchSubmit' type='submit' value='Search Date' onClick={this.props.searchDate}/>
      </div>
    )
  }
}

export default Search;
