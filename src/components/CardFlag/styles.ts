import styled from "styled-components";

export const Container = styled.div`
  background-color: #fff;
  height: 208px;
  width: 245px;
  padding: 16px;
  overflow: hidden;
  position: relative;
`;

export const Flag = styled.img`
  width: 18px;
  height: 18px;
  position: absolute;
  top: 8px;
  left: 8px; 
`;

export const Content = styled.div`
  align-items: center;
 
`;

export const FlagImage = styled.img`
 margin-left: -7px;
`;

export const Footer = styled.div`
  display: flex;
`;

export const Title = styled.h1`
  color: #000000;
  width: 195px;
  font-size: 13px;
  font-weight: 400;
`;

export const Frame = styled.div`
  background-color: #ffffff;
  width: 96px;
  height: 18px;
  position: absolute;
  top: 139px;
  left: 0;
  display: flex;
  flex-direction: row;
  padding-left: 8px;
  padding-right: 6px;
  padding-top: 4px;
  padding-bottom: 4px;
  h1 {
  color: #000000;
  text-align: center;
  font-size: 10px;
  font-weight: 400;
  line-height: 10px;
  }
`;

export const Continent = styled.div`
  color: #000000;
  text-align: center;
  font-family: 'Courier New', Courier, monospace;
  font-size: 10px;
  font-weight: 400;
  line-height: 10px;
`;
