import Header from "../../components/Header";

import * as S from "./styles";
import CardFlag from "../../components/CardFlag";

export default function Flags() {
  return (
    <div>
      <Header />
      <S.Title><h1> THE </h1> GEOGRAPHY </S.Title>
      <S.Menu>
        ALL / NORTH AMERICA / SOUTH AMERICA / AFRICA / EUROPE / ASIA / OCEANIA{" "}
      </S.Menu>
      <S.Container>
        <S.Content>
          <CardFlag />
        </S.Content>
      </S.Container>
    </div>
  );
}
