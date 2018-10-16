import React from 'react';
import css from './../styles/Display.css';

import Modal from './Modal.jsx';

class Display extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
      info: ''
    }

    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  showModal() {
    var asteroidFacts = [
      'Asteroids aren’t the only things that hit Earth. Each day, more than 100 tons of material from asteroids and comets falls toward Earth. Most of it is destroyed by friction as it passes through our atmosphere. If something DOES hit the ground, it is known as a meteorite.',
      'While asteroid impacts were more common in the past, they aren’t as frequent today.',
      'An asteroid impact some 65 million years ago contributed to the extinction of the dinosaurs. (It was one of several factors that affected all life on Earth at that time.)',
      'Earth suffers an impact from an object the size of a football field about once every 2,000 years.',
      'A car-sized meteoroid (a piece of asteroid) falls into Earth’s atmosphere about once a year. The result is a beautiful fireball, but the meteoroid usually burns up before reaching the ground.',
      'Asteroids are rich in precious metals and other metals, as well as water.',
      'Some asteroids are actually blown-out comets. The ices are gone, and all that’s left is the rocky material.',
      'Some asteroids have moons of their own!',
      'Most asteroids orbit the Sun in the Asteroid Belt, which lies between Mars and Jupiter.',
      'Asteroids are also referred to as minor planets or planetoids.'
    ]
    var info = asteroidFacts[Math.floor(Math.random() * asteroidFacts.length)];
    this.setState({
      show: true,
      info: info
    });
  };

  hideModal() {
    this.setState({
      show: false
    });
  };

  render() {
    return (
      <div className='display'>
        <Modal show={this.state.show} handleClose={this.hideModal} randomFact={this.state.info}/>
        <div>Count: {this.props.asteroids.elements}</div>
        <div>
          {
            this.props.asteroids.near_earth_objects.map((element) => {
              var hazardous = element.is_potentially_hazardous_asteroid ? <div>Potentially Hazardous</div> : null;
              return (
                <div key={element.name} className='element' onClick={this.showModal} >
                  <image className='elementImage' style={{ transform: `scale(${Math.round(element.estimated_diameter.feet.estimated_diameter_max)/1000})` }}/>
                  <div className='elementText' >
                    <div>Name: {element.name} </div>
                    <div>Diameter: {Math.round(element.estimated_diameter.feet.estimated_diameter_max)} feet </div>
                    <div>Velocity: {Math.round(element.close_approach_data[0].relative_velocity.miles_per_hour)} mph </div>
                    <div>Distance from Earth: {Math.round(element.close_approach_data[0].miss_distance.miles)} miles </div>
                    <div className='hazardous'>{hazardous}</div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
}

export default Display;
