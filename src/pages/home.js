import React from "react";
import { FlexBox1 } from "../components/global";

const Home = () => {
  return(
    <>
      <h1>HOME</h1>
      <FlexBox1>
        <div className = 'top'>
          top
        </div>
        <div className = 'mid'>
          mid
        </div>
        <div className = 'bottom'>
          bottom
        </div>
      </FlexBox1>
    </>
  )
}

export default Home