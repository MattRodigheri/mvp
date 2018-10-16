import React from 'react';
import axios from 'axios';
import css from './../styles/SavedDates.css';


const SavedDates = (props) => {

    if (props.savedDates === undefined) {
      return null;
    }
    return (
      <div className="savedContainer">
        {
          props.savedDates.map((element) => {
          return <div className='savedDate' key={element.date} onClick={(event) => props.searchFromSaved(event.target.textContent.slice(6, 16))}>{'Date: ' + element.date + ' Count: ' + element.count}</div>
          })
        }
      </div>
    )
  }

export default SavedDates;
