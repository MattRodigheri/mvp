import React from 'react';
import css from './../styles/Display.css';

function Display(props) {

  return (
    <div className='display'>
      <div>Number of Asteroids: {props.asteroids.elements}</div>
      <div>
        {
          props.asteroids.near_earth_objects.map((element) => {
          var count = 0;
          count++;
          var hazardous = element.is_potentially_hazardous_asteroid ? <div>Potentially Hazardous</div> : null;
          return (
            <div key={element.name} className='element'>
              <div>Name: {element.name}</div>
              <div>Diameter: {element.estimated_diameter.feet.estimated_diameter_max}</div>
              <div>Velocity: {element.close_approach_data[0].relative_velocity.miles_per_hour}</div>
              <div>Distance from Earth: {element.close_approach_data[0].miss_distance.miles}</div>
              <div>{hazardous}</div>
              <img className='asteroidImg'/>
            </div>
          )
        })
      }
      </div>
    </div>
  )
}

export default Display;
