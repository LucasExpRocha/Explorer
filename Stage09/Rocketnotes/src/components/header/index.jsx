import { RiShutDownLine } from 'react-icons/ri'
import { Container, Profile, Logout } from "./styles";

export function Header(){
    return (
        <Container>
            <Profile>
                <img src="https://github.com/lucasexprocha.png" alt="imagem do usuario" />
                <div>
                    <span>Bem-Vindo</span>
                    <strong>Lucas Rocha</strong>
                </div>
            </Profile>
            <Logout>
                <RiShutDownLine/>
            </Logout>
        </Container>
    )
}