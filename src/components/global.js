import styled from "styled-components";

// login.js, signup.js, start.js
export const FlexBox1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  width: 100%;
  & div.top,
    div.mid,
    div.bottom{
    border: 1px solid black;
  }
`