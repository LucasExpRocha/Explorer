import { Background, Container, Form } from './styles';
import { Input } from '../../components/input';
import { Button } from '../../components/buttons';

import { FiMail, FiLock, FiUser } from 'react-icons/fi';
import { Link } from 'react-router-dom';

export function SignUp(){
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
                />
                <Input
                    placeholder="E-mail"
                    type="text"
                    icon={FiMail}
                />
                <Input
                    placeholder="Senha"
                    type="password"
                    icon={FiLock}
                />

                <Button title="Cadastrar" />

                <Link to="/">
                    Volte para o login
                </Link>

            </Form>
            <Background/>        
        </Container>
    )
}