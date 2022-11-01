import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi";
import { Link, useNavigate } from 'react-router-dom';
import { useState } from "react";

import avatarPlaceholder from "../../assets/avatar_placeholder.svg"
import { useAuth } from '../../hooks/auth'
import { Container, Form, Avatar } from "./styles";
import { Input } from "../../components/input"
import { Button } from "../../components/buttons";
import { api } from "../../services/api";

export function Profile(){
    const { user, updateProfile } = useAuth();

    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [passwordOld, setPasswordOld] = useState();
    const [passwordNew, setPasswordNew] = useState();

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

    const [avatar, setAvatar] = useState(avatarUrl);
    const [avatarFile, setAvatarFile] = useState(null);

    async function handleUpdate(){
        const updated = {
            name,
            email,
            password: passwordNew,
            old_password: passwordOld,
        }
        const userUpdated = Object.assign(user, updated)

        await updateProfile({user: userUpdated, avatarFile});
    }

    function handleChangeAvatar(event){
        const file = event.target.files[0];
        setAvatarFile(file);

        const imagePreview = URL.createObjectURL(file)
        setAvatar(imagePreview)
    }

    return (
        <Container>
            <header>
                <Link to={-1}>
                    <FiArrowLeft/>
                </Link>
            </header>

            <Form>
                <Avatar>
                    <img src={avatar} alt="foto do usúario" />
                    <label htmlFor="avatar">
                        <FiCamera/>
                        <input type="file" id="avatar" accept='image/*' onChange={handleChangeAvatar}/>
                    </label>
                </Avatar>
                <Input placeholder="Nome" value={name} onChange={e => setName(e.target.value)} type="text" icon={FiUser}/>
                <Input placeholder="E-mail" value={email} onChange={e => setEmail(e.target.value)} type="text" icon={FiMail}/>
                <Input placeholder="Senha atual" onChange={e => setPasswordOld(e.target.value)} type="password" icon={FiLock}/>
                <Input placeholder="Nova senha" onChange={e => setPasswordNew(e.target.value)} type="password" icon={FiLock}/>
                <Button title="Salvar" onClick={handleUpdate}/>
            </Form>
        </Container>
    )
}