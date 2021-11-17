import Header from "../../components/Header";
import Button from "../../components/Button";
import Card from "../../components/Card";
import * as S from "./styles";

export default function Login() {
  return (
    <div>
      <Header />
      <S.Container>
        <h1>Login</h1>
        <S.Content>
          <Card>
            <h1>Card</h1>
            <Button>ENTRAR</Button>
          </Card>
        </S.Content>
      </S.Container>
    </div>
  );
}
