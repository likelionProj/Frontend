import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";

const dataInit = {
  moods : [
    { name : '혼공하기 좋은', state: false },
    { name : '팀플하기 좋은', state: false },
    { name : '밤새기 좋은', state: false },
    { name : '작업하기 좋은', state: false }
  ],
  nums : [
    { name: '혼자 공부', state: false },
    { name: '2인 이상', state: false },
    { name: '4인 이상', state: false },
    { name: '6인 이상', state: false },
    { name: '10인 이상', state: false}
  ],
  sokets : [
    { name: '있음', state: false },
    { name: '없음', state: false }
  ],
  desks : [
    { name : '원형', state: false },
    { name : '네모', state: false },
  ],
  chairs : [
    { name : '있음', state: false },
    { name : '없음', state: false }
  ],
  noises : [
    { name : '30 ~ 40db', state: false },
    { name : '40 ~ 50db', state: false },
    { name : '50 ~ 60db', state: false },
    { name : '60 ~ 70db', state: false },
  ],
  times : [
    { name : '밤 9시까지', state: false },
    { name : '밤 10시까지', state: false },
    { name : '밤 11시까지', state: false },
    { name : '24시간', state: false },
  ]
}

const Scroll = ({ getFunction }) => {
    const [data, setData] = useState(dataInit);
    
    const checkedStyle = {
      borderColor: "#DBA37D",
      color: "#BD6C34"
    }
    const basicStyle = {
      color: "#B0B0B0"
    }

    useEffect(()=>{
      getFunction(data);
    }, [data])

    const moodHandler = (idx) => {
      const tmpData = data;
      tmpData.moods[idx].state = !tmpData.moods[idx].state;
      setData({...tmpData})
    }
    const numHandler = (idx) => {
      const tmpData = data;
      for (let i=0; i<tmpData.nums.length; i++){
        if (i!==idx){
          tmpData.nums[i].state = false;
        }
      }
      tmpData.nums[idx].state = !tmpData.nums[idx].state;
      setData({...tmpData});
    }
    const soketHandler = (idx) => {
      const tmpData = data;
      for (let i=0; i<tmpData.sokets.length; i++){
        if (i!==idx){
          tmpData.sokets[i].state = false;
        }
      }
      tmpData.sokets[idx].state = !tmpData.sokets[idx].state;
      setData({...tmpData});
    }
    const deskHandler = (idx) => {
      const tmpData = data;
      tmpData.desks[idx].state = !tmpData.desks[idx].state;
      setData({...tmpData});
    }
    const chairHandler = (idx) => {
      const tmpData = data;
      for (let i=0; i<tmpData.chairs.length; i++){
        if (i!==idx){
          tmpData.chairs[i].state = false;
        }
      }
      tmpData.chairs[idx].state = !tmpData.chairs[idx].state;
      setData({...tmpData});
    }
    const noiseHandler = (idx) => {
      const tmpData = data;
      tmpData.noises[idx].state = !tmpData.noises[idx].state;
      setData({...tmpData});
    }
    const timeHandler = (idx) => {
      const tmpData = data;
      for (let i=0; i<tmpData.times.length; i++){
        if (i!==idx){
          tmpData.times[i].state = false;
        }
      }
      tmpData.times[idx].state = !tmpData.times[idx].state;
      setData({...tmpData});
    }
    return( 
        <>
          <Mood>
            <img src="연필.png" alt=""/>
            <p>어떤 무드를 원하시나요?</p>
            <Option1>
              <div>
              {data.moods.map((mood, idx)=>{
                  return(
                    <button onClick={()=>moodHandler(idx)} style={mood.state?checkedStyle:basicStyle}>
                      <p style={mood.state?checkedStyle:basicStyle}>#{mood.name}</p>
                    </button>
                  )
                })
              }
              </div>
            </Option1>
          </Mood>
          <Various>
            <img src="티비.png" alt=""/>
            <p>어떤 옵션을 원하시나요?</p>
            <Option2>
                <section><h3>인원수</h3></section>
                <div>
                {data.nums.map((num, idx)=>{
                    return(
                      <button onClick={()=>numHandler(idx)} style={num.state?checkedStyle:basicStyle}>
                        <p style={num.state?checkedStyle:basicStyle}>{num.name}</p>
                      </button>
                    )
                  })
                }</div>
            </Option2>
            <Option3>
                <section><h3>콘센트</h3></section>
                <div>
                {data.sokets.map((soket, idx)=>{
                    return(
                      <button onClick={()=>soketHandler(idx)}  style={soket.state?checkedStyle:basicStyle}>
                        <p style={soket.state?checkedStyle:basicStyle}>{soket.name}</p>
                      </button>
                    )
                  })
                }</div>
            </Option3>
            <Option4>
                <section><h3>책상모양</h3></section>
                <div>
                {data.desks.map((desk, idx)=>{
                    return(
                      <button onClick={()=>deskHandler(idx)} style={desk.state?checkedStyle:basicStyle}>
                        <p style={desk.state?checkedStyle:basicStyle}>{desk.name}</p>
                      </button>
                    )
                  })
                }</div>
            </Option4>
            <Option5>
                <section><h3>의자등받이</h3></section>
                <div>
                {data.chairs.map((chair, idx)=>{
                    return(
                      <button onClick={()=>chairHandler(idx)}  style={chair.state?checkedStyle:basicStyle}>
                        <p style={chair.state?checkedStyle:basicStyle}>{chair.name}</p>
                      </button>
                    )
                  })
                }</div>
            </Option5>
            <Option6>
                <section><h3>소음 정도(데시벨)</h3></section>
                <article>
                <section><h4>30~40db 도서관 정도</h4>
                <h4>40~50db 조용한 사무실</h4></section>
                <section><h4>50~60db 약간의 잡담</h4>
                <h4>60~70db 시끄러운 사무실</h4></section>
                </article>
                <div>
                {data.noises.map((noise, idx)=>{
                    return(
                      <button onClick={()=>noiseHandler(idx)} style={noise.state?checkedStyle:basicStyle}>
                        <p style={noise.state?checkedStyle:basicStyle}>{noise.name}</p>
                      </button>
                    )
                  })
                }</div>
            </Option6>
            <Option7>
                <section><h3>운영시간</h3></section>
                <div>
                {data.times.map((time, idx)=>{
                    return(
                      <button onClick={()=>timeHandler(idx)} style={time.state?checkedStyle:basicStyle}>
                        <p style={time.state?checkedStyle:basicStyle}>{time.name}</p>
                      </button>
                    )
                  })
                }</div>
            </Option7>
          </Various>
        </>
    )
}

export default Scroll

const Mood = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@500;600;700&display=swap');

    //border: solid;
    margin-left: 15px;
    margin-top : 80px;
    display: block;

    img {
        width: 20px;
        height: 20px;
    }

    p {
        font-family: 'Inter', sans-serif;
        font-weight: 600;
        font-size: 17px;
        display: inline;
        padding-left: 10px;
    }
`

const Various = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@500;600;700&display=swap');

    //border: solid;
    margin-left: 15px;
    margin-top: 20px;
    display: block;

    img {
        width: 20px;
        height: 20px;
    }

    p {
        font-family: 'Inter', sans-serif;
        font-weight: 600;
        font-size: 17px;
        display: inline;
        padding-left: 10px;
    }
`

const Option1 = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@500;600;700&display=swap');

    //border: solid;
    margin-top: 13px;

    div {
        margin-left: 4%;
    }

    button {
        width: 150px;
        height: 36px;
        border-style: solid;
        border-radius: 20px;
        border-color: #DCDCDC;
        border-width: 2px;
        background-color: #FFF;
        margin-right: 12px;
        margin-bottom: 15px;
        cursor: pointer;
        transition: .2s;
    }
    
    p {
        font-family: 'Inter', sans-serif;
        font-weight: 600;
        color: #B0B0B0;
        font-size: 17px;
        margin-left: -12px;
    }

    button:hover{
      border-width: 3px;
    }
`

const Option2 = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@500;600;700&display=swap');

    //border: solid;
    margin-top: 0px;
    display: flex;

    div {
        padding-left: 9%;
        margin-top: 15px;
    }

    section {
        width: 140px;
    }

    button {
        width: 110px;
        height: 36px;
        border-style: solid;
        border-radius: 20px;
        border-color: #DCDCDC;
        border-width: 2px;
        background-color: #FFF;
        margin-right: 15px;
        margin-bottom: 15px;
        cursor: pointer;
        transition: .2s;
    }

    p {
        font-family: 'Inter', sans-serif;
        font-weight: 600;
        color: #B0B0B0;
        font-size: 17px;
        margin-left: -12px;
    }

    h3 {
        font-family: 'Inter', sans-serif;
        font-weight: 600;
        font-size: 16px;
        padding-top: 3px;
    }

    button:hover{
      border-width: 3px;
    }
`

const Option3 = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@500;600;700&display=swap');

    //border: solid;
    margin-top: 0px;
    display: flex;

    div {
        //padding-left: 9%;
        margin-top: 15px;
    }

    section {
        width: 90px;
    }

    button {
        width: 66px;
        height: 36px;
        border-style: solid;
        border-radius: 20px;
        border-color: #DCDCDC;
        border-width: 2px;
        background-color: #FFF;
        margin-right: 15px;
        margin-bottom: 15px;
        cursor: pointer;
        transition: .2s;
    }

    p {
        font-family: 'Inter', sans-serif;
        font-weight: 600;
        color: #B0B0B0;
        font-size: 17px;
        margin-left: -12px;
    }

    h3 {
        font-family: 'Inter', sans-serif;
        font-weight: 600;
        font-size: 16px;
        padding-top: 6px;
    }

    button:hover{
      border-width: 3px;
    }
`

const Option4 = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@500;600;700&display=swap');

    //border: solid;
    margin-top: 0px;
    display: flex;

    div {
        //padding-left: 9%;
        margin-top: 15px;
    }

    section {
        width: 90px;
    }

    button {
        width: 66px;
        height: 36px;
        border-style: solid;
        border-radius: 20px;
        border-color: #DCDCDC;
        border-width: 2px;
        background-color: #FFF;
        margin-right: 18px;
        margin-bottom: 15px;
        cursor: pointer;
        transition: .2s;
    }

    p {
        font-family: 'Inter', sans-serif;
        font-weight: 600;
        color: #B0B0B0;
        font-size: 17px;
        margin-left: -12px;
    }

    h3 {
        font-family: 'Inter', sans-serif;
        font-weight: 600;
        font-size: 16px;
        padding-top: 6px;
    }

    button:hover{
      border-width: 3px;
    }
`

const Option5 = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@500;600;700&display=swap');

    //border: solid;
    margin-top: 0px;
    display: flex;

    div {
        //padding-left: 9%;
        margin-top: 15px;
    }

    section {
        width: 110px;
    }

    button {
        width: 66px;
        height: 36px;
        border-style: solid;
        border-radius: 20px;
        border-color: #DCDCDC;
        border-width: 2px;
        background-color: #FFF;
        margin-right: 18px;
        margin-bottom: 15px;
        cursor: pointer;
        transition: .2s;
    }

    p {
        font-family: 'Inter', sans-serif;
        font-weight: 600;
        color: #B0B0B0;
        font-size: 17px;
        margin-left: -12px;
    }

    h3 {
        font-family: 'Inter', sans-serif;
        font-weight: 600;
        font-size: 16px;
        padding-top: 6px;
    }

    button:hover{
      border-width: 3px;
    }
`

const Option6 = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@500;600;700&display=swap');

    //border: solid;
    margin-top: 13px;

    div {
        margin-left: 4%;
    }

    button {
        width: 115px;
        height: 36px;
        border-style: solid;
        border-radius: 20px;
        border-color: #DCDCDC;
        border-width: 2px;
        background-color: #FFF;
        margin-right: 48px;
        margin-bottom: 15px;
        cursor: pointer;
        transition: .2s;
    }

    p {
        font-family: 'Inter', sans-serif;
        font-weight: 600;
        color: #B0B0B0;
        font-size: 17px;
        margin-left: -12px;
    }

    h3 {
        font-family: 'Inter', sans-serif;
        font-weight: 600;
        font-size: 16px;
        padding-top: 6px;
    }

    h4 {
        display: inline;
        font-family: 'Inter', sans-serif;
        font-weight: 400;
        font-size: 12px;
        color: #808080;
        margin-right: 20px;
        margin-left: 12px;
    }

    article {
        margin-bottom: 19px;
    }

    button:hover{
      border-width: 3px;
    }
`

const Option7 = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@500;600;700&display=swap');

    //border: solid;
    margin-top: 13px;

    div {
        margin-left: 4%;
    }

    button {
        width: 115px;
        height: 36px;
        border-style: solid;
        border-radius: 20px;
        border-color: #DCDCDC;
        border-width: 2px;
        background-color: #FFF;
        margin-right: 48px;
        margin-bottom: 15px;
        cursor: pointer;
        transition: .2s;
    }

    p {
        font-family: 'Inter', sans-serif;
        font-weight: 600;
        color: #B0B0B0;
        font-size: 17px;
        margin-left: -12px;
    }

    h3 {
        font-family: 'Inter', sans-serif;
        font-weight: 600;
        font-size: 16px;
        padding-top: 6px;
    }

    h4 {
        display: inline;
        font-family: 'Inter', sans-serif;
        font-weight: 400;
        font-size: 12px;
        color: #808080;
        margin-right: 20px;
        margin-left: 12px;
    }

    article {
        margin-bottom: 19px;
    }

    button:hover{
      border-width: 3px;
    }
`
