import React, { useEffect, useState, useRef } from 'react';

import './App.css';
import PicturesList from "./picturesList"
var abc="accc"
interface props {
  name:string
}
function App(props:props) {
  
  const [getData, dataReady] = useState(false)
  const [error, requestError] = useState(false);

  const appRef = useRef(null);
  const [list, insertData] = useState([])
  useEffect(() => {
    fetch('https://picsum.photos/v2/list').then((response) => response.json().then((data) => {

      insertData(data)
      dataReady(true)

    })).catch(err => {
      requestError(true)
      console.log('err is', err)
    })

  }, [])

  return (

    <div className={"App"}>
     <div  className={"NameColor"}>{props.name}</div>
      {getData ? (<PicturesList list={list} appRef={appRef} />) : (<div>Loading...</div>)}
      {error ? <div>Error in fetch</div> : null}
    </div>
  );

}

export default App;