import React from 'react';
import Display from './Display.jsx';
import Search from './Search.jsx';
import axios from 'axios';
import css from './../styles/App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      date: '',
      searchDate: '',
      elements: 0,
      near_earth_objects: []
    }

    this.getData = this.getData.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.searchDate = this.searchDate.bind(this);
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
      console.log(response.data);
      this.setState({
        elements: response.data.element_count,
        near_earth_objects: response.data.near_earth_objects[this.state.searchDate]
      })
    })
    .catch((error) => {
      console.log(error);
    })
  }

  render() {
    return (
      <div>
        <Display asteroids={this.state}/>
        <Search searchDate={this.searchDate} handleChange={this.handleChange}/>
      </div>
    );
  }
};

export default App;