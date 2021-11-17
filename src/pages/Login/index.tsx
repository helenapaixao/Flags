import Header from "../../components/Header";
import Button from '../../components/Button'
import * as S from "./styles";

export default function Login() {
  return (
    <div>
      <Header />
      <S.Container>
        <h1>Login</h1>
        <Button> ENTRAR </Button>
      </S.Container>
    </div>
  );
}
