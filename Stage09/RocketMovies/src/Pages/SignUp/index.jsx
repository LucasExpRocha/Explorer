import { Input } from '../../Components/Input';
import { Button } from '../../Components/Button';

import { FiArrowLeft, FiLock, FiMail, FiUser } from 'react-icons/fi'
import { Container, Form, Background } from './styles';
import { ButtonText } from '../../Components/ButtonText';

export function SignUp(){
    return (
        <Container>
            <Form>
                <h1>RocketMovies</h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>
                <h2>Crie sua conta</h2>

                <Input icon={FiUser} placeholder="Name"/>
                <Input icon={FiMail} placeholder="E-mail"/>
                <Input icon={FiLock} placeholder="Password"/>

                <Button title="Criar conta"/>
                <ButtonText icon={FiArrowLeft} to="/" title="Voltar para o login"/>
            </Form>
            <Background/>
        </Container>
    )
}