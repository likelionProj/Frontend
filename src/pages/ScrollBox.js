import React from "react";
import styled from "styled-components";
import { useState, useEffect, useRef } from "react";

const FilterOption = {
    mood: ['#혼공하기 좋은', '#팀플하기 좋은', '#밤새기 좋은', '#작업하기 좋은'],
    peopleNum: ['혼자 공부', '2인 이상', '4인 이상', '6인 이상', '10인 이상'],
    socket: ['있음', '없음'],
    table: ['원형', '네모'],
    chair: ['있음', '없음'],
    noise: ['30 ~ 40db', '40 ~ 50db', '50 ~ 60db', '60 ~ 70db'],
    operatingTime: ['밤 9시까지', '밤 10시까지', '밤 11시까지', '24시간']
}


const MoodOption = () => {

    const [clickMood1, setClickMood1] = useState(true);
    const [option1color, setoption1Color] = useState("#B0B0B0");

    const [clickMood2, setClickMood2] = useState(true);
    const [option2color, setoption2Color] = useState("#B0B0B0");

    const [clickMood3, setClickMood3] = useState(true);
    const [option3color, setoption3Color] = useState("#B0B0B0");

    const [clickMood4, setClickMood4] = useState(true);
    const [option4color, setoption4Color] = useState("#B0B0B0");

    const onClickMoodoption1 = () => {
        setClickMood1((prev) => !prev);
        if(clickMood1) {
            setoption1Color("#BD6C34");
        }
        if(!clickMood1) {
            setoption1Color("#B0B0B0");
        }
    }

    const onClickMoodoption2 = () => {
        setClickMood2((prev) => !prev);
        if(clickMood2) {
            setoption2Color("#BD6C34");
        }
        if(!clickMood2) {
            setoption2Color("#B0B0B0");
        }
    }

    const onClickMoodoption3 = () => {
        setClickMood3((prev) => !prev);
        if(clickMood3) {
            setoption3Color("#BD6C34");
        }
        if(!clickMood3) {
            setoption3Color("#B0B0B0");
        }
    }

    const onClickMoodoption4 = () => {
        setClickMood4((prev) => !prev);
        if(clickMood4) {
            setoption4Color("#BD6C34");
        }
        if(!clickMood4) {
            setoption4Color("#B0B0B0");
        }
    }

    return (
        
        <Mood>
            <img src="연필.png" alt=""/>
            <p>어떤 무드를 원하시나요?</p>
            <Option1>
                <div>
                <button onClick={onClickMoodoption1}><p style={{ color: option1color }}>{FilterOption.mood[0]}</p></button>
                <button onClick={onClickMoodoption2}><p style={{ color: option2color }}>{FilterOption.mood[1]}</p></button>
                <button onClick={onClickMoodoption3}><p style={{ color: option3color }}>{FilterOption.mood[2]}</p></button>
                <button onClick={onClickMoodoption4}><p style={{ color: option4color }}>{FilterOption.mood[3]}</p></button>
                {/* <div>{MoodElement()}</div> */}
                </div>
            </Option1>
        </Mood>
    )
}

const VariousOption = () => {

    const [clickNum1, setClickNum1] = useState(true);
    const [Num1color, setNum1Color] = useState("#B0B0B0");

    const [clickNum2, setClickNum2] = useState(true);
    const [Num2color, setNum2Color] = useState("#B0B0B0");

    const [clickNum3, setClickNum3] = useState(true);
    const [Num3color, setNum3Color] = useState("#B0B0B0");

    const [clickNum4, setClickNum4] = useState(true);
    const [Num4color, setNum4Color] = useState("#B0B0B0");

    const [clickNum5, setClickNum5] = useState(true);
    const [Num5color, setNum5Color] = useState("#B0B0B0");

    const onClickNumoption1 = () => {
        setClickNum1((prev) => !prev);
        if(clickNum1) {
            setNum1Color("#BD6C34");
        }
        if(!clickNum1) {
            setNum1Color("#B0B0B0");
        }
    }

    const onClickNumoption2 = () => {
        setClickNum2((prev) => !prev);
        if(clickNum2) {
            setNum2Color("#BD6C34");
        }
        if(!clickNum2) {
            setNum2Color("#B0B0B0");
        }
    }

    const onClickNumoption3 = () => {
        setClickNum3((prev) => !prev);
        if(clickNum3) {
            setNum3Color("#BD6C34");
        }
        if(!clickNum3) {
            setNum3Color("#B0B0B0");
        }
    }

    const onClickNumoption4 = () => {
        setClickNum4((prev) => !prev);
        if(clickNum4) {
            setNum4Color("#BD6C34");
        }
        if(!clickNum4) {
            setNum4Color("#B0B0B0");
        }
    }

    const onClickNumoption5 = () => {
        setClickNum5((prev) => !prev);
        if(clickNum5) {
            setNum5Color("#BD6C34");
        }
        if(!clickNum5) {
            setNum5Color("#B0B0B0");
        }
    }

    const [clickSocket1, setClickSocket1] = useState(true);
    const [socket1color, setSocket1Color] = useState("#B0B0B0");

    const [clickSocket2, setClickSocket2] = useState(true);
    const [socket2color, setSocket2Color] = useState("#B0B0B0");

    const [clickSocket3, setClickSocket3] = useState(true);
    const [socket3color, setSocket3Color] = useState("#B0B0B0");

    const onClickSocketoption1 = () => {
        setClickSocket1((prev) => !prev);
        if(clickSocket1) {
            setSocket1Color("#BD6C34");
        }
        if(!clickSocket1) {
            setSocket1Color("#B0B0B0");
        }
    }

    const onClickSocketoption2 = () => {
        setClickSocket2((prev) => !prev);
        if(clickSocket2) {
            setSocket2Color("#BD6C34");
        }
        if(!clickSocket2) {
            setSocket2Color("#B0B0B0");
        }
    }

    const [clickTable1, setClickTable1] = useState(true);
    const [table1color, setTable1Color] = useState("#B0B0B0");

    const [clickTable2, setClickTable2] = useState(true);
    const [table2color, setTable2Color] = useState("#B0B0B0");

    const onClickTableoption1 = () => {
        setClickTable1((prev) => !prev);
        if(clickTable1) {
            setTable1Color("#BD6C34");
        }
        if(!clickTable1) {
            setTable1Color("#B0B0B0");
        }
    }

    const onClickTableoption2 = () => {
        setClickTable2((prev) => !prev);
        if(clickTable2) {
            setTable2Color("#BD6C34");
        }
        if(!clickTable2) {
            setTable2Color("#B0B0B0");
        }
    }

    const [clickChair1, setClickChair1] = useState(true);
    const [chair1color, setChair1Color] = useState("#B0B0B0");

    const [clickChair2, setClickChair2] = useState(true);
    const [chair2color, setChair2Color] = useState("#B0B0B0");

    const onClickChairoption1 = () => {
        setClickChair1((prev) => !prev);
        if(clickChair1) {
            setChair1Color("#BD6C34");
        }
        if(!clickChair1) {
            setChair1Color("#B0B0B0");
        }
    }

    const onClickChairoption2 = () => {
        setClickChair2((prev) => !prev);
        if(clickChair2) {
            setChair2Color("#BD6C34");
        }
        if(!clickChair2) {
            setChair2Color("#B0B0B0");
        }
    }

    const [clickNoise1, setClickNoise1] = useState(true);
    const [noise1color, setNoise1Color] = useState("#B0B0B0");

    const [clickNoise2, setClickNoise2] = useState(true);
    const [noise2color, setNoise2Color] = useState("#B0B0B0");

    const [clickNoise3, setClickNoise3] = useState(true);
    const [noise3color, setNoise3Color] = useState("#B0B0B0");

    const [clickNoise4, setClickNoise4] = useState(true);
    const [noise4color, setNoise4Color] = useState("#B0B0B0");

    const onClickNoiseoption1 = () => {
        setClickNoise1((prev) => !prev);
        if(clickNoise1) {
            setNoise1Color("#BD6C34");
        }
        if(!clickNoise1) {
            setNoise1Color("#B0B0B0");
        }
    }

    const onClickNoiseoption2 = () => {
        setClickNoise2((prev) => !prev);
        if(clickNoise2) {
            setNoise2Color("#BD6C34");
        }
        if(!clickNoise2) {
            setNoise2Color("#B0B0B0");
        }
    }

    const onClickNoiseoption3 = () => {
        setClickNoise3((prev) => !prev);
        if(clickNoise3) {
            setNoise3Color("#BD6C34");
        }
        if(!clickNoise3) {
            setNoise3Color("#B0B0B0");
        }
    }

    const onClickNoiseoption4 = () => {
        setClickNoise4((prev) => !prev);
        if(clickNoise4) {
            setNoise4Color("#BD6C34");
        }
        if(!clickNoise4) {
            setNoise4Color("#B0B0B0");
        }
    }

    const [clickTime1, setClickTime1] = useState(true);
    const [time1color, setTime1Color] = useState("#B0B0B0");

    const [clickTime2, setClickTime2] = useState(true);
    const [time2color, setTime2Color] = useState("#B0B0B0");

    const [clickTime3, setClickTime3] = useState(true);
    const [time3color, setTime3Color] = useState("#B0B0B0");

    const [clickTime4, setClickTime4] = useState(true);
    const [time4color, setTime4Color] = useState("#B0B0B0");

    const onClickTimeoption1 = () => {
        setClickTime1((prev) => !prev);
        if(clickTime1) {
            setTime1Color("#BD6C34");
        }
        if(!clickTime1) {
            setTime1Color("#B0B0B0");
        }
    }

    const onClickTimeoption2 = () => {
        setClickTime2((prev) => !prev);
        if(clickTime2) {
            setTime2Color("#BD6C34");
        }
        if(!clickTime2) {
            setTime2Color("#B0B0B0");
        }
    }

    const onClickTimeoption3 = () => {
        setClickTime3((prev) => !prev);
        if(clickTime3) {
            setTime3Color("#BD6C34");
        }
        if(!clickTime3) {
            setTime3Color("#B0B0B0");
        }
    }

    const onClickTimeoption4 = () => {
        setClickTime4((prev) => !prev);
        if(clickTime4) {
            setTime4Color("#BD6C34");
        }
        if(!clickTime4) {
            setTime4Color("#B0B0B0");
        }
    }

    return (
        <Various>
            <img src="티비.png" alt=""/>
            <p>어떤 옵션을 원하시나요?</p>
            <Option2>
                <section><h3>인원수</h3></section>
                <div>
                    <button onClick={onClickNumoption1}><p style={{ color: Num1color }}>{FilterOption.peopleNum[0]}</p></button>
                    <button onClick={onClickNumoption2}><p style={{ color: Num2color }}>{FilterOption.peopleNum[1]}</p></button>
                    <button onClick={onClickNumoption3}><p style={{ color: Num3color }}>{FilterOption.peopleNum[2]}</p></button>
                    <button onClick={onClickNumoption4}><p style={{ color: Num4color }}>{FilterOption.peopleNum[3]}</p></button>
                    <button onClick={onClickNumoption5}><p style={{ color: Num5color }}>{FilterOption.peopleNum[4]}</p></button>
                    {/* <div>{MoodElement()}</div> */}
                </div>
            </Option2>
            <Option3>
                <section><h3>콘센트</h3></section>
                <div>
                    <button onClick={onClickSocketoption1}><p style={{ color: socket1color }}>{FilterOption.socket[0]}</p></button>
                    <button onClick={onClickSocketoption2}><p style={{ color: socket2color }}>{FilterOption.socket[1]}</p></button>
                    {/* <div>{MoodElement()}</div> */}
                </div>
            </Option3>
            <Option4>
                <section><h3>책상모양</h3></section>
                <div>
                    <button onClick={onClickTableoption1}><p style={{ color: table1color }}>{FilterOption.table[0]}</p></button>
                    <button onClick={onClickTableoption2}><p style={{ color: table2color }}>{FilterOption.table[1]}</p></button>
                    {/* <div>{MoodElement()}</div> */}
                </div>
            </Option4>
            <Option5>
                <section><h3>의자등받이</h3></section>
                <div>
                    <button onClick={onClickChairoption1}><p style={{ color: chair1color }}>{FilterOption.chair[0]}</p></button>
                    <button onClick={onClickChairoption2}><p style={{ color: chair2color }}>{FilterOption.chair[1]}</p></button>
                    {/* <div>{MoodElement()}</div> */}
                </div>
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
                    <button onClick={onClickNoiseoption1}><p style={{ color: noise1color }}>{FilterOption.noise[0]}</p></button>
                    <button onClick={onClickNoiseoption2}><p style={{ color: noise2color }}>{FilterOption.noise[1]}</p></button>
                    <button onClick={onClickNoiseoption3}><p style={{ color: noise3color }}>{FilterOption.noise[2]}</p></button>
                    <button onClick={onClickNoiseoption4}><p style={{ color: noise4color }}>{FilterOption.noise[3]}</p></button>
                    {/* <div>{MoodElement()}</div> */}
                </div>
            </Option6>
            <Option7>
                <section><h3>운영시간</h3></section>
                <div>
                    <button onClick={onClickTimeoption1}><p style={{ color: time1color }}>{FilterOption.operatingTime[0]}</p></button>
                    <button onClick={onClickTimeoption2}><p style={{ color: time2color }}>{FilterOption.operatingTime[1]}</p></button>
                    <button onClick={onClickTimeoption3}><p style={{ color: time3color }}>{FilterOption.operatingTime[2]}</p></button>
                    <button onClick={onClickTimeoption4}><p style={{ color: time4color }}>{FilterOption.operatingTime[3]}</p></button>
                    {/* <div>{MoodElement()}</div> */}
                </div>
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
