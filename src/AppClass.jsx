import { Component } from "react";
import "./App.css"
import elephant from "./images/elephant.jpeg";

export default class AppClass extends Component{
  
  imageData = ()=>{
    let data = [
      {
        id:1,
        img:elephant
      },
      {
        id:2,
        img:elephant
      },
      {
        id:3,
        img:elephant
      },
      {
        id:4,
        img:elephant
      }
    ]
    return data;
  }

  // code here
  render(){
    const imageDataData = this.imageData();
    return(
      <div>
        <div><h2> Kalvium gallary</h2></div>
      <div className='imagee'>
        {imageDataData.map((item)=>{
          return <img key={item.id} src={item.img}/>
        })}
      </div>
      </div>
    )
  }
}
