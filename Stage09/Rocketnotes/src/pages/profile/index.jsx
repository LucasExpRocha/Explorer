import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi";
import { Link } from 'react-router-dom';

import { useAuth } from '../../hooks/auth'

import { Container, Form, Avatar } from "./styles";
import { Input } from "../../components/input"
import { Button } from "../../components/buttons";
import { useState } from "react";


export function Profile(){
    const { user } = useAuth();

    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [passwordOld, setPasswordOld] = useState();
    const [passwordNew, setPasswordNew] = useState();

    return (
        <Container>
            <header>
                <Link to="/">
                    <FiArrowLeft/>
                </Link>
            </header>

            <Form>
                <Avatar>
                    <img src="https://github.com/lucasexprocha.png" alt="foto do usúario" />
                    <label htmlFor="avatar">
                        <FiCamera/>
                        <input type="file" id="avatar" accept='image/*'/>
                    </label>
                </Avatar>
                <Input placeholder="Nome" value={name} onChange={e => setName(e.target.value)} type="text" icon={FiUser}/>
                <Input placeholder="E-mail" value={email} onChange={e => setEmail(e.target.value)} type="text" icon={FiMail}/>
                <Input placeholder="Senha atual" onChange={e => setPasswordOld(e.target.value)} type="password" icon={FiLock}/>
                <Input placeholder="Nova senha" onChange={e => setPasswordNew(e.target.value)} type="password" icon={FiLock}/>
                <Button title="Salvar" />
            </Form>
        </Container>
    )
}