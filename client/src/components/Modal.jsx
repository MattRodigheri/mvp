import React from 'react';
import css from './../styles/Modal.css';

const Modal = (props) => {
  const showHideClassName = props.show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <div className="modal-main">
        {props.children}
        <button onClick={props.handleClose}>close</button>
        <image className='earth' />
        <div>{props.distance}</div>
        <image className='asteroid' />
      </div>
    </div>
  );
};

export default Modal;
