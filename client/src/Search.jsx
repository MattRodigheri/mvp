import React from 'react';

var Search = function(props) {
  return (
    <div>
      <input type='text' />
      <input type='submit' value='Search a Date' onClick={props.searchDate}/>
    </div>
  )
}

export default Search;
