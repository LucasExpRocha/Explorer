import { Input } from '../../Components/Input';
import { Button } from '../../Components/Button';

import { FiLock, FiMail } from 'react-icons/fi'
import { Container, Form, Background } from './styles';
import { ButtonText } from '../../Components/ButtonText';

export function SignIn(){
    return (
        <Container>
            <Form>
                <h1>RocketMovies</h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>
                <h2>Faça seu login</h2>

                <Input icon={FiMail} placeholder="E-mail"/>
                <Input icon={FiLock} placeholder="Password"/>

                <Button title="Entrar"/>
                <ButtonText to="/register" title="Criar conta"/>
            </Form>
            <Background/>
        </Container>
    )
}