import { Background, Container, Form } from './styles';
import { Input } from '../../components/input';
import { Button } from '../../components/buttons';

import { api } from "../../services/api"

import { FiMail, FiLock, FiUser } from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

export function SignUp(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [sendMsg, setSendMsg] = useState(false);

    const navigate = useNavigate();

    async function handleSignUp(){
        if(!name || !email || !password){
            return alert("Preencha todos os campos!")
        }
        setSendMsg(true);
        await api.post("/users", { name, email, password })
            .then(() => {
                alert("Usuário cadastrado com sucesso!")
                navigate("/")
            })
            .catch(error => {
                if(error.response){
                    alert(error.response.data.message)
                } else {
                    alert("Não foi possível cadastrar o usuario")
                }
            })
        setSendMsg(false);
    }

    return (
        <Container>
            <Form>
                <h1>Rocket Notes</h1>
                <p>Aplicação para salvar e gerenciar seus links úteis</p>

                <h2>Crie sua conta</h2>

                <Input
                    placeholder="Name"
                    type="text"
                    icon={FiUser}
                    onChange={e => setName(e.target.value)}
                />
                <Input
                    placeholder="E-mail"
                    type="text"
                    icon={FiMail}
                    onChange={e => setEmail(e.target.value)}
                />
                <Input
                    placeholder="Senha"
                    type="password"
                    icon={FiLock}
                    onChange={e => setPassword(e.target.value)}
                />

                <Button title="Cadastrar" onClick={handleSignUp} loading={sendMsg}/>

                <Link to="/">
                    Volte para o login
                </Link>

            </Form>
            <Background/>        
        </Container>
    )
}