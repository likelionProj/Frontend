import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import SelectedFilter from "./SelectedFilter";

const CafeDetail = () => {
    return(
      <>
        <Topbar>
            <div>
                <Link to="/filter"><img src="back.png" alt=""/></Link>
                <section><h1>프로스콘스 에리카점</h1></section>
            </div>
            <section>
                <p>경기 안산시 상록구 학사2길 12</p>
                <p>0504-994-6183</p>
            </section>
        </Topbar>
        <Photo>
          <img src="카페사진1.png"/>
          <img src="카페사진2.png"/>
          <img src="카페사진3.png"/>
          <img src="카페사진4.png" style={{marginRight: 0}}/>
          <button>사진 더보기</button>
        </Photo>
        <Contents>
          <span><SelectedFilter/></span>
        </Contents>
      </>
    )
}

export default CafeDetail

const Topbar = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@500;600;700&display=swap');
  
    //border: solid;
    
    font-family: 'Inter', sans-serif;
    width: 373px;
    height: 130px;
    background-color: #CBB292;
    // margin-top: -426px;
    
    // position: fixed;
    // top: 27px;

    position: absolute;
    top: 0;
    
  img {
    width: 40px;
    height: 40px;
    padding-left: 12px;
    padding-top: 13px;

    display: inline;
  }

  button {
    border-style: none;
    background-color: #CBB292;
  }

  p {
    //border: solid;
    font-weight: 700;
    font-size: 14px;
    margin-top: -5px;
    margin-left: 23px;
  }

  h1 {
    font-weight: 700;
    font-size: 20px;
    color: #4D2E14;
    //display: inline;
  }

  div {
    display: flex;

    section {
        margin-top: 5px;
      }
    
  }

  section {
    margin-top: 8px;
  }
`

const Photo = styled.div`

  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@500;600;700&display=swap');
  font-family: 'Inter', sans-serif;
  margin-top: 180px;

  img {
    width: 90px;
    height: 90px;
    margin-right: 4px;
  }

  button {
    font-family: 'Inter', sans-serif;
    font-weight: 500;
    font-size: 11px;
    margin-left: 300px;
    border-style: none;
    background-color: #fff;
  }

`

const Contents = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@500;600;700&display=swap');
  font-family: 'Inter', sans-serif;

  display: flex;
  flex-direction: column;

  span {
    //border: solid;
    width: 100%;
    height: 350px;
    overflow-y: scroll;
    margin-top: 20px;
  }
`