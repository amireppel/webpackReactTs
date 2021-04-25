import React, {useEffect, useState} from 'react';

import Modal from 'react-modal';
import './App.css';
const customStyles = {
  content : {
    top  : '40%',
    left : '50%',
    right :'auto',
    height: '40em',
    width:'60em',
    bottom : 'auto',
    marginRight: '-50%',
    transform  : 'translate(-50%, -50%)',
    
  },
  overlay: {
    background: 'green'
  }
  };
function AppModal(props) {
 
  useEffect(()=>{
    Modal.setAppElement(props.appRef.current) }
    , [props.appRef])


 

  return (
    <div onClick={props.closeModal}>     
    <Modal
    isOpen={true}
    style={customStyles}
    
        >
     
      {props.children}
    
      </Modal>
     </div>
  )
}

export default AppModal