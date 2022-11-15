import styled from "styled-components";

// login.js, signup.js, start.js
export const FlexBox1 = styled.div`
  font-family: 'Inter';
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  width: 100%;
  & div.top,
    div.mid,
    div.bottom{
    border: 1px solid black;

    
    .login {

      display: flex;
      flex-direction: column;
      box-sizing: border-box;
  
      width: 297px;
      height: 46px;
      background: #FFFFFF;
      border: 1px solid #000000;
      border-radius: 5px;

      margin: auto;

     &::placeholder{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 150%;

        letter-spacing: -0.019em;
        color: #1E1E1E;
      }

      .imageBox {
        display: flex;
        flex-direction: column;
        
        img {
          position: absolute;
          width: 32px;
          height: 30px;
          margin: auto;
        }
      }
  
    }

    .btn{
      display: flex;
      flex-direction: column;
      
      img {
        position: absolute;
        width: 32px;
        height: 30px;
        display: block;
        margin: auto;
      }
    }

    .search {
      display: flex;
      flex-direction: column;
      box-sizing: border-box;
      width: 319.63px;
      height: 46.44px;
      margin: auto; 
      background: #FFFFFF;
      border: 1px solid #000000;
      border-radius: 5px;
      
    }
    
  }
`