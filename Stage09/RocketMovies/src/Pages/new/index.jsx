import { ButtonText } from '../../Components/ButtonText';
import { Header } from '../../Components/Header';
import { Input } from '../../Components/Input';

import { Container } from './styles';
import { FiArrowLeft } from 'react-icons/fi';
import { TextArea } from '../../Components/TextArea';
import { NoteItem } from '../../Components/noteitem';
import { Button } from '../../Components/Button';

export function New(){
    return (
        <Container>
            <Header/>
            <main>
                <ButtonText to="/" title="Voltar" icon={FiArrowLeft}/>
                <h1>Novo filme</h1>
                <section>
                    <Input placeholder="Título"/>
                    <Input placeholder="Sua nota (de 0 a 5)"/>
                </section>
                <TextArea placeholder="Observações"/>
                <p>Marcadores</p>
                <div>
                    <NoteItem value="React" />
                    <NoteItem value="React" />
                    <NoteItem value="React" />
                    <NoteItem value="React" />
                    <NoteItem value="React" />
                    <NoteItem value="React" />

                    <NoteItem placeholder="Novo marcador" isNew/>
                </div>
                <section>
                    <Button title="Excluir filme"/>
                    <Button title="Salvar alterações"/>
                </section>
            </main>
        </Container>
    )
}