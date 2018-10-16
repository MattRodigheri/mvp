import React from 'react';
import css from './../styles/Modal.css';

const Modal = (props) => {
  const showHideClassName = props.show ? 'modal display-block' : 'modal display-none';
  return (
    <div className={showHideClassName}>
      <div className='modal-main'>
        {props.children}
        <image className='close' onClick={props.handleClose} />
        <image className='earth' />
        <div className='info'>
          <div>Random Asteroid Fact: </div><br/>
          <div>{props.randomFact}</div>
        </div>
        <image className='asteroid' />
      </div>
    </div>
  );
};

export default Modal;
