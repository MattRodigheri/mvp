import React from 'react';
import css from './../styles/Display.css';

class Display extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='display'>
        <div>Count: {this.props.asteroids.elements}</div>
        <div>
          {
            this.props.asteroids.near_earth_objects.map((element) => {
              var hazardous = element.is_potentially_hazardous_asteroid ? <div>Potentially Hazardous</div> : null;
              return (
                <div key={element.name} className='element'>
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
