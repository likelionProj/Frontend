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

const SelectedFilter = () => {

    return (
        <Various>
            <Option2>
                <section><h3>인원수</h3></section>
                <div>
                    <button><p>{FilterOption.peopleNum[0]}</p></button>
                    <button><p>{FilterOption.peopleNum[1]}</p></button>
                    <button><p>{FilterOption.peopleNum[2]}</p></button>
                </div>
            </Option2>
            <Option3>
                <section><h3>콘센트</h3></section>
                <div>
                    <button><p>{FilterOption.socket[0]}</p></button>
                </div>
            </Option3>
            <Option4>
                <section><h3>책상모양</h3></section>
                <div>
                    <button><p>{FilterOption.table[0]}</p></button>
                </div>
            </Option4>
            <Option5>
                <section><h3>의자등받이</h3></section>
                <div>
                    <button><p>{FilterOption.chair[0]}</p></button>
                    <button><p>{FilterOption.chair[1]}</p></button>
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
                    <button><p>{FilterOption.noise[0]}</p></button>
                    <button><p>{FilterOption.noise[1]}</p></button>
                </div>
            </Option6>
            <Option7>
                <section><h3>운영시간</h3></section>
                <div>
                    <button><p>{FilterOption.operatingTime[2]}</p></button>
                </div>
            </Option7>
        </Various>
    )
}

export default SelectedFilter

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

const Option2 = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@500;600;700&display=swap');

    //border: solid;
    margin-top: 0px;
    display: flex;

    div {
        padding-left: 5%;
        margin-top: 15px;
    }

    section {
        width: 100px;
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
        color: #BD6C34;
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
        color: #BD6C34;
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
        color: #BD6C34;
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
        color: #BD6C34;
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
        color: #BD6C34;
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
        color: #BD6C34;
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
