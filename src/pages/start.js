import React from "react";
import { FlexBox1 } from "../components/global";

import './common.css';

const Start = () => {
  return(
    <>
      <h1>Start</h1>
      <FlexBox1>
        <div className = 'top'>
          top
        </div>
        <div className = 'mid'>
          mid
        </div>
        <div className = 'bottom'>
          <button className="mainBtn">START!</button>
        </div>
      </FlexBox1>
    </>
  )
}

export default Start