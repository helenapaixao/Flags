import styled from "styled-components";

export const Container = styled.div`
  background-color: #fff;
  height: 208px;
  width: 245px;
  padding: 16px;
`;

export const Flag = styled.img`
  width: 18px;
  height: 18px;
`;

export const Content = styled.div`
  align-items: center;
`;

export const FlagImage = styled.img`
 margin-left: -7px;
`;

export const Footer = styled.div`
  text-align: center;
  display: flex;

  h1 {
   margin-right: 162px;
    
  }
  
`;

export const Title = styled.h1`
  color: #000000;
  width: 195px;
  font-size: 13px;
  font-family: Nunito;
  font-weight: 400;
`;

export const Frame = styled.div`
   background-color: #ffffff;
/*   border-top-left-radius: 0;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 10px; */
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
  font-family: Nunito;
  font-weight: 400;
  line-height: 10px;
  }
`;

export const Continent = styled.div`
color: #000000;
  text-align: center;
  font-size: 10px;
  font-family: Nunito;
  font-weight: 400;
  line-height: 10px;
`;
