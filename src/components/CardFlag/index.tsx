import * as S from "./styles";
import { FaRegHeart } from "react-icons/fa";
import BrazilFlag from '../../assets/flags/brazil.png'

const CardFlag: React.FC = () => (
  <S.Container>
    <S.Content>
      <S.FlagImage src={BrazilFlag} alt="flag" height="166" width="229" />
      <S.Footer>
        <S.Frame>
          <S.Continent>SOUTH AMERICA</S.Continent>
        </S.Frame>
        <S.Title>BRAZIL</S.Title>
              <FaRegHeart size={18} color="#000" />
      </S.Footer>

    </S.Content>
  </S.Container>
);

export default CardFlag;
