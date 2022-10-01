import { Link } from 'react-router-dom';
import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi";
import { Container, Form, Avatar } from "./styles";
import { Input } from "../../components/input"
import { Button } from "../../components/buttons";


export function Profile(){
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
                <Input placeholder="Nome" type="text" icon={FiUser}/>
                <Input placeholder="E-mail" type="text" icon={FiMail}/>
                <Input placeholder="Senha atual" type="password" icon={FiLock}/>
                <Input placeholder="Nova senha" type="password" icon={FiLock}/>
                <Button title="Salvar" />
            </Form>
        </Container>
    )
}