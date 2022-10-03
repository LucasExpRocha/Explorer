import { Container, Main, Section } from './styles'
import { FiPlus } from 'react-icons/fi'
import { Link } from 'react-router-dom'

import { Header } from '../../Components/Header'
import { Button } from '../../Components/Button'
import { Card } from '../../Components/Card'


export function Home(){
    return (
        <Container>
            <Header/>
            <Main>
                <div>
                    <h1>Meus filmes</h1>
                    <Link to="/new">
                        <Button icon={FiPlus} title="Adicionar filme"/>
                    </Link>
                </div>
                <Section>
                    <Card />
                    <Card />
                    <Card />
                    <Card />

                </Section>
            </Main>
        </Container>
    )
}