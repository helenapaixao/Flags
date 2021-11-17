import * as S from "./styles";
import Logo from "../../assets/Logo.svg";

export default function Header() {
  return (
    <S.Container>
   
        <img src={Logo} alt="Logo" />
    </S.Container>
  );
}
