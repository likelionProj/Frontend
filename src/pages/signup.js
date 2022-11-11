import React from "react";
import { FlexBox1 } from "../components/global";

import './common.css';

const Signup = () => {
  return(
    <>
      <h1>SIGN UP</h1>
      <FlexBox1>
        <div className = 'top'>
          top
        </div>
        <div className = 'mid'>
          mid
        </div>
        <div className = 'bottom'>
          <button className="mainBtn" style={{marginBottom: 60}}>Sign up</button>
          <div className="subBtnArea">
            <div className="snsSignup">
              <button className="kakaoTalk"><img src="카카오톡.png"></img></button>
              <button className="naver"><img src="네이버.png"></img></button>
              <button className="apple"><img src="애플.png"></img></button>
              <p className="snsText">SNS로 회원가입하기</p>
            </div>
          </div>
        </div>
      </FlexBox1>
    </>
  )
}

export default Signup