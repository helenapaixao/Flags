import Header from "../../components/Header";
import Button from "../../components/Button";
import Card from "../../components/Card";
import Input from '../../components/Input'
import * as S from "./styles";

export default function Login() {
  return (
    <div>
      <Header />
      <S.Container>
        <h1>Login</h1>
        <S.Content>
          <Card>
            <Input name="login" type="email" placeholder="teste"/>
            <Button>ENTRAR</Button>
          </Card>
        </S.Content>
      </S.Container>
    </div>
  );
}
