import { RiShutDownLine } from 'react-icons/ri'
import { Container, Profile, Logout } from "./styles";

import { useAuth } from '../../hooks/auth'

export function Header(){

    const { signOut } = useAuth();

    return (
        <Container>
            <Profile to="/profile">
                <img src="https://github.com/lucasexprocha.png" alt="imagem do usuario" />
                <div>
                    <span>Bem-Vindo</span>
                    <strong>Lucas Rocha</strong>
                </div>
            </Profile>
            <Logout onClick={signOut}>
                <RiShutDownLine/>
            </Logout>
        </Container>
    )
}