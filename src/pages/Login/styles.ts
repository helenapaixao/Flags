import styled from "styled-components";
import Background from "../../assets/image/background.png";

export const Container = styled.div`
  background: url(${Background});
  height: 100vh;
  background-color:#E5E5E5;
  background-size: cover;
  background-repeat: no-repeat;
  filter: grayscale(100%);
`;

export const Content = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -110px;
  margin-top: -40px;
`;

export const Title = styled.h1`
  color: #000;
  position: absolute;
  left: 50%;
  top: 50%;
  align-items: center;
  margin-bottom: 332px;
  margin-top: -80px;
`;
