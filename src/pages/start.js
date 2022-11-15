import React from "react";
import { FlexBox1 } from "../components/global";


const Start = () => {
  return(
    <>
      <h1>Start</h1>
      <FlexBox1>
        <div className = 'top'>
          top
        </div>
        <div className = 'mid'>
          <div className="btn"><img src="search.png" alt="" /></div>
          <input className="search" style={{marginBottom: 51}}
            name="search"
            type="text"
          /> 
        </div>
        <div className = 'bottom'>
          <button className="mainBtn">START!</button>
        </div>
      </FlexBox1>
    </>
  )
}

export default Start