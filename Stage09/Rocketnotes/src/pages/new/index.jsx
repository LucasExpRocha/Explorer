import { Header } from "../../components/header";
import { Input } from "../../components/input";
import { TextArea } from "../../components/textarea";
import { NoteItem } from "../../components/noteitem";
import { Section } from "../../components/section";
import { Button } from "../../components/buttons";
import { Link } from 'react-router-dom';

import { Container, Form } from "./styles";

export function New(){
    return (
        <Container>
            <Header />

            <main>
                <Form>
                    <header>
                        <h1>Criar nota</h1>
                        <Link to="/">Voltar</Link>
                    </header>

                    <Input placeholder="Titulo"/>
                    <TextArea placeholder="Observações"/>
                    <Section title="Links úteis">
                        <NoteItem value="sadas"/>
                        <NoteItem placeholder="Novo link" isNew/>
                    </Section>
                    <Section title="Marcadores">
                        <div className="tags">
                            <NoteItem value="sadas"/>
                            <NoteItem placeholder="Novo link" isNew/>
                        </div>
                    </Section>

                    <Button title="Salvar"/>
                </Form>
            </main>
        </Container>
    )
}
