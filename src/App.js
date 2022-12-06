import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/home"
import Signup from "./pages/signup"
import Login from "./pages/login"
import Start from "./pages/start"
import Cafelist from "./pages/cafelist"
import MyPage from "./pages/mypage"
import Filter from "./pages/Filter"

import styled from "styled-components"

const App = () => {
  const getRecommend = (data) => {
    console.log('추천받기 버튼 누름');
    console.log(data);
  }
  return(
    <Frame>
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Home/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/start" element={<Start/>}/>
        <Route path="/cafelist" element={<Cafelist/>}/>
        <Route path="/mypage" element={<MyPage/>}/>
        <Route path="/filter" element={<Filter getRecommend={getRecommend}/>}/>
      </Routes>
    </BrowserRouter>
    </Frame>
  )
}

export default App;

const Frame = styled.div`
  width: 375px;
  height: 667px;
  border: 1px solid black;
  box-sizing: border-box;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
`