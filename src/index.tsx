import React from "react";
import ReactDOM from "react-dom";
import  "./styles/app.css"
import PicturesList from "./pictureList"
const App = () => (
  
   <PicturesList name={'alex'}/>

);

ReactDOM.render(

    <App />
  ,
  document.getElementById("root")
);
