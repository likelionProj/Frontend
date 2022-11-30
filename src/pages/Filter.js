import React from "react";
import styled from "styled-components";
import { FlexBox1 } from "../components/global";
import { Link } from "react-router-dom";
import Scroll from "./ScrollBox";

const Filter = () => {
    return(
        <>
            <FlexBox1>
                <FlexBox2>
                <Topbar>
                    <Link to="/home"><img src="back.png" alt=""/></Link>
                    <p>경기도 안산시 사동 한양대학로</p>
                </Topbar>
                <Contents>
                    <FilterTitle>
                        <p>카페 필터</p>
                    </FilterTitle>
                    <span>
                      <Scroll/>
                    </span>
                    <button className="sendBtn">카페 추천받기</button>
                </Contents>
                </FlexBox2>
            </FlexBox1>
        </>
    )
}

export default Filter

const Topbar = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@500;600;700&display=swap');
  
    //border: solid;
    
    font-family: 'Inter', sans-serif;
    width: 373px;
    height: 65px;
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
  }

  button {
    border-style: none;
    background-color: #CBB292;
  }

  p {
    //border: solid;
    font-weight: 700;
    font-size: 14px;
    padding-left: 24%;
    margin-top: -15px;
  }
`

const FilterTitle = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@500;600;700&display=swap');

    //border: solid;
    
    // display: block;
    // margin: auto;
    // margin-top: -265px;

    background-color: #fff;
    width: 373px;
    height: 62px;

    position: absolute;
    top: 62px;


  p {
    font-family: 'Inter', sans-serif;
    font-weight: 700;
    color: #6C4E36;
    font-size: 17px;
    padding-left: 150px;
  }
`
const Contents = styled.div`
    //border: solid;

    display: flex;
    flex-direction: column;
    justify-content: center;

    span {
      //border: solid;
      width: 100%;
      height: 520px;
      overflow-y: scroll;
      margin-top: 20px;
    }

    .sendBtn {
      width: 160px;
      height: 50px;
      border-radius: 30px;
      background-color: #CBB292;
      font-size: 17px;
      font-family: 'Inter', sans-serif;
      font-weight: 700;
      border-style: none;
      margin: auto;
      margin-top: 20px;
    }
`

const FlexBox2 = styled.div`
    //border: solid;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

