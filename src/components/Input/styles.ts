import styled from "styled-components";

export const Container = styled.div`
  background: #FFFF;
  border: 2px solid #F0F0F0;
  padding: 16px;
  width: 100%;
  height: 36px;
  align-items: center;
  display: flex;
  color: #666360;
  & + div {
    margin-top: 8px;
  }
  
  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #7A7A7A;
    &::placeholder {
      color: #7A7A7A;
    }
  }
  
`;