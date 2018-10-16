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
          return <div key={element.date}>{'Date: ' + element.date + ' Count: ' + element.count}</div>
          })
        }
      </div>
    )
  }

export default SavedDates;
