import React from 'react';
import axios from 'axios';
import css from './../styles/App.css';

import Display from './Display.jsx';
import Search from './Search.jsx';
import SavedDates from './SavedDates.jsx';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      date: '',
      searchDate: '',
      elements: 0,
      near_earth_objects: [],
      savedDates: []
    }

    this.getData = this.getData.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.searchDate = this.searchDate.bind(this);
    this.saveTheDate = this.saveTheDate.bind(this);
    this.getSavedDates = this.getSavedDates.bind(this);

  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    var today = new Date();
    var year = today.getFullYear();
    var month = String(today.getMonth()+1);
    var day = String(today.getDate());
    if (month.length < 2) {
      month = '0' + String(today.getMonth()+1);
    }
    if (day.length < 2) {
      day = '0' + String(today.getDate());
    }
    this.state.date = year+'-'+month+'-'+day;

    axios.get('/asteroids', {
      params: {
        date: this.state.date
      }
    })
    .then((response) => {
      this.setState({
        elements: response.data.element_count,
        near_earth_objects: response.data.near_earth_objects[this.state.date]
      })
    })
    .catch((error) => {
      console.log(error);
    })

    this.getSavedDates();
  }

  getSavedDates() {
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

  handleChange(event) {
    this.setState({
      searchDate: event.target.value
    })
  }

  searchDate() {
    axios.get('/asteroids', {
      params: {
        date: this.state.searchDate
      }
    })
    .then((response) => {
      this.setState({
        date: this.state.searchDate,
        elements: response.data.element_count,
        near_earth_objects: response.data.near_earth_objects[this.state.searchDate]
      })
    })
    .catch((error) => {
      console.log(error);
    })
  }

  saveTheDate() {
    axios.post('/savedDates', {
      date: this.state.date,
      count: this.state.elements,
    })
    .then(
      this.getSavedDates()
    )
    .catch((error) => {
      console.log(error);
    })
  }

  render() {
    return (
      <div>
        <div className='topBar'>
          <div>Data provided by:</div> <image />
        </div>
        <div className='appContainer'>
          <Display asteroids={this.state}/>
          <Search searchDate={this.searchDate} handleChange={this.handleChange} />
          <button className='saveTheDate' onClick={this.saveTheDate}>Save This Date</button>
          <SavedDates savedDates={this.state.savedDates}/>
        </div>
      </div>
    );
  }
};

export default App;
