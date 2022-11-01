import { Header } from "../../components/header";
import { Input } from "../../components/input";
import { TextArea } from "../../components/textarea";
import { NoteItem } from "../../components/noteitem";
import { Section } from "../../components/section";
import { Button } from "../../components/buttons";

import { api } from "../../services/api";

import { useNavigate } from 'react-router-dom';

import { Container, Form } from "./styles";
import { useState } from "react";
import { ButtonText } from "../../components/buttonText";

export function New(){
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    const [links, setLinks] = useState([])
    const [newLink, setNewLink] = useState("")

    const [tags, setTags] = useState([])
    const [newTags, setNewTags] = useState("")

    const navigate = useNavigate();

    function handleBack(){
        navigate(-1)
    }

    function handleAddLink(){
        setLinks(prevState => [...prevState, newLink]);
        setNewLink("");
    }

    function handleRemoveLink(deleted){
        setLinks(prevState => prevState.filter(link => link !== deleted))
    }

    function handleAddTags(){
        setTags(prevState => [...prevState, newTags]);
        setNewTags("");
    }

    function handleRemoveTags(deleted){
        setTags(prevState => prevState.filter(tag => tag !== deleted))
    }

    async function handleNewNote(){
        if(!title || !description || !tags || !links){
            return alert("Preencha todos os campos.")
        }

        if(newTags || newLink){
            return alert("Existe uma tag e/ou link esperando para ser adicionado.")
        }

        await api.post("/notes", {
            title,
            description,
            tags,
            links
        })
        alert("Nota criada com sucesso")
        navigate(-1);
    }

    return (
        <Container>
            <Header />

            <main>
                <Form>
                    <header>
                        <h1>Criar nota</h1>
                        <ButtonText onClick={handleBack} title="Voltar"/>
                    </header>

                    <Input placeholder="Titulo" onChange={e => setTitle(e.target.value)}/>
                    <TextArea placeholder="Observações" onChange={e => setDescription(e.target.value)}/>

                    <Section title="Links úteis">
                        {
                            links.map((link, index) => (
                                <NoteItem 
                                    key={String(index)}
                                    value={link}
                                    onClick={() => {handleRemoveLink(link)}}
                                />
                            ))
                        }
                        <NoteItem 
                            isNew
                            placeholder="Novo link"
                            value={newLink}
                            onChange={e => setNewLink(e.target.value)}
                            onClick={handleAddLink}
                        />
                    </Section>

                    <Section title="Marcadores">
                        <div className="tags">
                        {
                            tags.map((tag, index) => (
                                <NoteItem 
                                    key={String(index)}
                                    value={tag}
                                    onClick={() => {handleRemoveTags(tag)}}
                                />
                            ))
                        }
                        <NoteItem 
                            isNew
                            placeholder="Nova tag"
                            value={newTags}
                            onChange={e => setNewTags(e.target.value)}
                            onClick={handleAddTags}
                        />
                        </div>
                    </Section>

                    <Button title="Salvar" onClick={handleNewNote}/>
                </Form>
            </main>
        </Container>
    )
}
