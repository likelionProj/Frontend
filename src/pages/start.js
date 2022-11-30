import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FlexBox1 } from "../components/global";
import CampusData from "../data/campusData";

const Start = () => {

  const [search, setSearch] = useState('');
  const [campus, setCampus] = useState('');
  const searchHandler = (e) => {
    setSearch(e.target.value);
    setCampus(e.target.value);
  }
  // const campusHandler = (search) => {
  //   console.log(search);
  //   CampusData.forEach((data)=>{
  //     let regex1_result = false;
  //     data.regex1.forEach((regex)=>{
  //       regex1_result = regex.test(search);
  //     })
  //     let regex2_result = false;
  //     data.regex2.forEach((regex)=>{
  //       console.log(regex, search);
  //       regex2_result = regex.test(search);
  //     })
  //     console.log(regex1_result, regex2_result, search);
  //     if (regex1_result && regex2_result){
  //       setCampus(data.name);
  //     }
  //   })
  // }
  const navigate = useNavigate();
  const goCampus = () => {
    // campusHandler(search);
    console.log(campus);
    navigate(`/?=${campus}`,{
      state: { campus : campus },
    })
  }

  return(
    <>
      <FlexBox1>
        <div className = 'top'>
          <div className = "top_container">
            <div className = "img_container">
              <img src="그림5.png"/>
            </div>
            <div className="title_container">
              <h1>환영합니다!</h1>
            </div>
            <div className="sub_container">
              <p>카페를 찾고 싶은 캠퍼스를<br/>선택해주세요.</p>
            </div>
          </div>
        </div>
        <div className = 'mid'>
          <div className="btn"><img src="search.png" alt="" /></div>
          <input className="search" style={{marginBottom: 51}}
            name="search"
            type="text"
            onChange={searchHandler}
          /> 
        </div>
        <div className = 'bottom'>
          <button style={{cursor:'pointer'}} onClick={goCampus} className="mainBtn">START!</button>
        </div>
      </FlexBox1>
    </>
  )
}

export default Start;