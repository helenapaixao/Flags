import styled from "styled-components";
import Background from "../../assets/image/background.png";

export const Container = styled.div`
  background: url(${Background});
  fill: 8%;
  height: 100vh;
  background-color: #e5e5e5;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const Content = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -110px;
  margin-top: -40px;
`;

export const Title = styled.div`
  color: #000;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -90px;
  margin-top: -310px;
  font-size: 30px;
  font-weight: bold;
  display: flex;
    font-size: 24px;
  h1 {
     font-size: 24px;
      font-weight: italic;
      margin-right: 4px;
  }

`;

export const Menu = styled.div`
  color: #000;
  position: absolute;
  left: 50%;
  top: 50%;
   margin-left: -286px; 
  margin-top: -260px;
  font-size: 30px;
  font-size: 16px;
  text-align: center;
  display: flex;

  h1 {
    font-size: 16px;
    color: #ACACAC;
    margin-left: 4px;
  }
`;
