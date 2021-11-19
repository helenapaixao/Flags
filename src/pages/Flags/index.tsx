import Header from "../../components/Header";

import * as S from "./styles";
import CardFlag from '../../components/CardFlag'

export default function Flags() {
  return (
    <div>
      <Header />
      <S.Container>
        <CardFlag/> 
      </S.Container>
    </div>
  );
}
