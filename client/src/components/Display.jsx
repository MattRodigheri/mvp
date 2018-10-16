import React from 'react';
import css from './../styles/Display.css';

import Modal from './Modal.jsx';

class Display extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false
    }

    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  showModal() {
    this.setState({
      show: true
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
        <Modal show={this.state.show} handleClose={this.hideModal} distance={this.props.asteroids.near_earth_objects} />
        <div>Count: {this.props.asteroids.elements}</div>
        <div>
          {
            this.props.asteroids.near_earth_objects.map((element) => {
              var hazardous = element.is_potentially_hazardous_asteroid ? <div>Potentially Hazardous</div> : null;
              return (
                <div key={element.name} className='element' onClick={this.showModal}>
                  <image className='elementImage' style={{ transform: `scale(${Math.round(element.estimated_diameter.feet.estimated_diameter_max)/1000})` }}/>
                  <div className='elementText'>
                    <div>Name: {element.name}</div>
                    <div>Diameter: {Math.round(element.estimated_diameter.feet.estimated_diameter_max)} feet</div>
                    <div>Velocity: {Math.round(element.close_approach_data[0].relative_velocity.miles_per_hour)} mph</div>
                    <div>Distance from Earth: {Math.round(element.close_approach_data[0].miss_distance.miles)} miles</div>
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
