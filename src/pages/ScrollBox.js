import React from "react";
import styled from "styled-components";
import { useState, useEffect, useRef } from "react";

const MoodOption = () => {
  const moodsInit = [
    { name : '혼공하기 좋은', state: false },
    { name : '팀플하기 좋은', state: false },
    { name : '밤새기 좋은', state: false },
    { name : '작업하기 좋은', state: false }]

  const [moods, setMoods] = useState(moodsInit);
  
  const moodHandler = (idx) => {
    const tmpMoods = moods;
    tmpMoods[idx].state = !tmpMoods[idx].state;
    setMoods([...tmpMoods]);
  }

  return (
    <Mood>
      <img src="연필.png" alt=""/>
      <p>어떤 무드를 원하시나요?</p>
      <Option1>
        <div>
        {moods.map((mood, idx)=>{
            return(
              <button onClick={()=>moodHandler(idx)}>
                <p style={mood.state?{color:"#BD6C34"}:{color:"#B0B0B0"}}>#{mood.name}</p>
              </button>
            )
          })
        }
        </div>
      </Option1>
    </Mood>
  )
}

const VariousOption = () => {
  const optionsInit = {
    numsInit : [
      { name: '혼자 공부', state: false },
      { name: '2인 이상', state: false },
      { name: '4인 이상', state: false },
      { name: '6인 이상', state: false },
      { name: '10인 이상', state: false}
    ],
    soketsInit : [
      { name: '있음', state: false },
      { name: '없음', state: false }
    ],
    desksInit : [
      { name : '원형', state: false },
      { name : '네모', state: false },
    ],
    chairsInit : [
      { name : '있음', state: false },
      { name : '없음', state: false }
    ],
    noisesInit : [
      { name : '30 ~ 40db', state: false },
      { name : '40 ~ 50db', state: false },
      { name : '50 ~ 60db', state: false },
      { name : '60 ~ 70db', state: false },
    ],
    timesInit : [
      { name : '밤 9시까지', state: false },
      { name : '밤 10시까지', state: false },
      { name : '밤 11시까지', state: false },
      { name : '24시간', state: false },
    ]
  }

  const [nums, setNums] = useState(optionsInit.numsInit);
  const [sokets, setSokets] = useState(optionsInit.soketsInit);
  const [desks, setDesks] = useState(optionsInit.desksInit);
  const [chairs, setChairs] = useState(optionsInit.chairsInit);
  const [noises, setNoises] = useState(optionsInit.noisesInit);
  const [times, setTimes] = useState(optionsInit.timesInit);

  const numHandler = (idx) => {
    const tmpNums = nums;
    tmpNums[idx].state = !tmpNums[idx].state;
    setNums([...tmpNums]);
  }
  const soketHandler = (idx) => {
    const tmpSokets = sokets;
    tmpSokets[idx].state = !tmpSokets[idx].state;
    setSokets([...tmpSokets]);
  }
  const deskHandler = (idx) => {
    const tmpDesks = desks;
    tmpDesks[idx].state = !tmpDesks[idx].state;
    setDesks([...tmpDesks]);
  }
  const chairHandler = (idx) => {
    const tmpChairs = chairs;
    tmpChairs[idx].state = !tmpChairs[idx].state;
    setChairs([...tmpChairs]);
  }
  const noiseHandler = (idx) => {
    const tmpNoises = noises;
    tmpNoises[idx].state = !tmpNoises[idx].state;
    setNoises([...tmpNoises]);
  }
  const timeHandler = (idx) => {
    const tmpTimes = times;
    tmpTimes[idx].state = !tmpTimes[idx].state;
    setTimes([...tmpTimes]);
  }

  return (
      <Various>
          <img src="티비.png" alt=""/>
          <p>어떤 옵션을 원하시나요?</p>
          <Option2>
              <section><h3>인원수</h3></section>
              <div>
              {nums.map((num, idx)=>{
                  return(
                    <button onClick={()=>numHandler(idx)}>
                      <p style={num.state?{color:"#BD6C34"}:{color:"#B0B0B0"}}>{num.name}</p>
                    </button>
                  )
                })
              }</div>
          </Option2>
          <Option3>
              <section><h3>콘센트</h3></section>
              <div>
              {sokets.map((soket, idx)=>{
                  return(
                    <button onClick={()=>soketHandler(idx)}>
                      <p style={soket.state?{color:"#BD6C34"}:{color:"#B0B0B0"}}>{soket.name}</p>
                    </button>
                  )
                })
              }</div>
          </Option3>
          <Option4>
              <section><h3>책상모양</h3></section>
              <div>
              {desks.map((desk, idx)=>{
                  return(
                    <button onClick={()=>deskHandler(idx)}>
                      <p style={desk.state?{color:"#BD6C34"}:{color:"#B0B0B0"}}>{desk.name}</p>
                    </button>
                  )
                })
              }</div>
          </Option4>
          <Option5>
              <section><h3>의자등받이</h3></section>
              <div>
              {chairs.map((chair, idx)=>{
                  return(
                    <button onClick={()=>chairHandler(idx)}>
                      <p style={chair.state?{color:"#BD6C34"}:{color:"#B0B0B0"}}>{chair.name}</p>
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
              {noises.map((noise, idx)=>{
                  return(
                    <button onClick={()=>noiseHandler(idx)}>
                      <p style={noise.state?{color:"#BD6C34"}:{color:"#B0B0B0"}}>{noise.name}</p>
                    </button>
                  )
                })
              }</div>
          </Option6>
          <Option7>
              <section><h3>운영시간</h3></section>
              <div>
              {times.map((time, idx)=>{
                  return(
                    <button onClick={()=>timeHandler(idx)}>
                      <p style={time.state?{color:"#BD6C34"}:{color:"#B0B0B0"}}>{time.name}</p>
                    </button>
                  )
                })
              }</div>
          </Option7>
      </Various>
  )
}

const Scroll = () => {

    return( 
        <>
            <MoodOption />
            <VariousOption />
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
    }

    p {
        font-family: 'Inter', sans-serif;
        font-weight: 600;
        color: #B0B0B0;
        font-size: 17px;
        margin-left: -12px;
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
`
