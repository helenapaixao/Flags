import styled from "styled-components";
import { shade } from "polished";

export const Container = styled.button`
  background: #000;
  border: 0;
  padding: 9px;
  color: #ffff;
  width: 268px;
  height: 36px;
  transition: background-color 0.2s;
  &:hover {
    background: ${shade(0.2, "#000")};
  }
`;
