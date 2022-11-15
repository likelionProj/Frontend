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
          <div className="imageBox"><img src="mail.png" alt="" /></div>
          <input className="login" style={{marginBottom: 21}}
            name="email"
            type="text"
            placeholder="이메일 아이디 입력"
          />
          <div className="imageBox"><img src="password.png" alt="" /></div>
          <input className="login" style={{marginBottom: 43}}
            name="password"
            type="text"
            placeholder="비밀번호 입력"
           />
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