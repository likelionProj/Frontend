import React from "react";
import { FlexBox1 } from "../components/global";

import './common.css';

const Login = () => {
  return(
    <>
      <h1>LOGIN</h1>
      <FlexBox1>
        <div className = 'top'>
          top
        </div>
        <div className = 'mid'>
          mid
        </div>
        <div className = 'bottom'>
          <button className="mainBtn">Log in</button>
          <div className="subBtnArea">
            <div className="member">
              <button className="findPasswordBtn">비밀번호 찾기</button>
              <button className="signupBtn">회원가입 하기</button>
            </div>
            <div className="non-member">
              <button className="non-signupBtn">비회원으로 이용하기</button>
            </div>
          </div>
        </div>
      </FlexBox1>
    </>
  )
}

export default Login