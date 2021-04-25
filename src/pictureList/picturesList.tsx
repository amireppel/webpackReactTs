import React, { useEffect, useState } from 'react';

import Modal from './modal.jsx';
import './App.css';
interface Props {
  list: Array<any>
  appRef: any,

}

function PicturesList(props: Props) {
  const [ModalOpen, show] = useState(false)
  const [pictureIndex, selectIndex] = useState(0)
  const [imageLoad, setLoadStatus] = useState(false)
  const openModal = (index: number) => {
    show(true)
    selectIndex(index)

  }
  const closeModal = () => {

    show(false)
    setLoadStatus(false)
  }

  return (
    <div className={"List"}>{!ModalOpen ? (
      <div> Pictures List:
        <ul >
          {props.list.map((item, index) => {

            return <li onClick={() => openModal(index)} key={index}>Author: {item.author}, id: {item.id}</li>
          })}

        </ul>
      </div>) : (<Modal closeModal={closeModal} appRef={props.appRef}><div>Author: {props.list[pictureIndex].author}, id: : {props.list[pictureIndex].id} </div>
        <img onLoad={() => { setLoadStatus(true) }} style={imageLoad ? {} : { display: 'none' }} src={props.list[pictureIndex].download_url} alt={'By: ' + props.list[pictureIndex].author} width="500" height="600" />
        {!imageLoad ? <div>Load image...</div> : null}
      </Modal>)}
    </div>
  );
}

export default PicturesList;
