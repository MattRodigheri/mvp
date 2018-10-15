import React from 'react';
import axios from 'axios';
import css from './../styles/SavedDates.css';

class SavedDates extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      savedDates: []
    }
  }

  componentDidMount() {
    axios.get('/savedDates')
    .then((response) => {
      this.setState({
        savedDates: response.data
      })
    })
    .catch((error) => {
      console.log(error);
    })
  }

  render() {
    return (
      <div className="savedContainer">
        {
          this.state.savedDates.map((element) => {
          return <div key={element.date}>{'Date: ' + element.date + ' Count: ' + element.count}</div>
          })
        }
      </div>
    )
  }
}

export default SavedDates;
