import { useNavigate } from 'react-router-dom';
import { RiShutDownLine } from 'react-icons/ri'
import { Container, Profile, Logout } from "./styles";

import { api } from "../../services/api";
import { useAuth } from '../../hooks/auth'

import avatarPlaceholder from "../../assets/avatar_placeholder.svg"

export function Header(){
    const navigation = useNavigate()
    const { signOut, user } = useAuth();

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

    function handleSignOut(){
        navigation("/");
        signOut();
    }

    return (
        <Container>
            <Profile to="/profile">
                <img src={avatarUrl} alt={user.name} />
                <div>
                    <span>Bem-Vindo</span>
                    <strong>{user.name}</strong>
                </div>
            </Profile>
            <Logout onClick={handleSignOut}>
                <RiShutDownLine/>
            </Logout>
        </Container>
    )
}