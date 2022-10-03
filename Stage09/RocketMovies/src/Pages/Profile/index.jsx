import { Container, Form, Avatar } from './styles';
import { FiArrowLeft, FiCamera, FiMail, FiUser, FiLock } from 'react-icons/fi';

import { ButtonText } from '../../Components/ButtonText';
import { Input }from '../../Components/Input';
import { Button } from '../../Components/Button';


export function Profile(){
    return (
        <Container>
            <header>
                <ButtonText icon={FiArrowLeft} title="Voltar" to="/"/>
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