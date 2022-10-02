import { Input } from '../Input';
import { Container } from './styles';
import { FiSearch } from 'react-icons/fi';
import { Link } from 'react-router-dom';

export function Header(){
    return (
        <Container>
            <h1>RocketMovies</h1>
            <Input icon={FiSearch} placeholder="Pesquise pelo titulo"/>
            <div>
                <div>
                    <h1>Lucas Exposito Rocha</h1>
                    <button>Sair</button>
                </div>
                <Link>
                    <img src="https://github.com/lucasexprocha.png" alt="Foto de perfil do usuario" />
                </Link>
            </div>
        </Container>
    )
}