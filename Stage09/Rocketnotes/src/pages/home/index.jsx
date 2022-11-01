import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiPlus, FiSearch } from 'react-icons/fi';

import { Container, Brand, Menu, Search, Content, NewNote } from './styles';
import { Header } from '../../components/header';
import { ButtonText } from '../../components/buttonText';
import { Input } from '../../components/input';
import { Section } from '../../components/section';
import { Note } from '../../components/note';
import { api } from '../../services/api';

export function Home(){
    const [search, setSearch] = useState("")
    const [tags, setTags] = useState([])
    const [tagsSelected, setTagsSelected] = useState([])
    const [notes, setNotes] = useState([])

    const navigate = useNavigate();

    function handleDetails(id){
        navigate(`/details/${id}`)
    }

    function handleTagSelected(tagName){
        if(tagName === "all"){
            return setTagsSelected([])
        }

        const alreadySelected = tagsSelected.includes(tagName)

        if(alreadySelected){
            const filteredTags = tagsSelected.filter(tag => tag !== tagName)
            setTagsSelected(filteredTags)
        } else {
            setTagsSelected(prevState => [...prevState, tagName])
        }
    }

    useEffect(() => {

        async function fetchTags(){
            const response = await api.get("tags");
            setTags(response.data)
        }

        fetchTags();
    }, [])

    useEffect(() => {
        async function fetchNotes(){
            const response = await api.get(`/notes?title=${search}&tags=${tagsSelected}`)
            setNotes(response.data)
        }
        fetchNotes()
    }, [tagsSelected, search])

    return (
        <Container>
            <Brand>
                <h1>Rocketnotes</h1>
            </Brand>

            <Header/>

            <Menu>
                <li><ButtonText title="Todos" onClick={() => handleTagSelected("all")} isActive={tagsSelected.length === 0}/></li>
                {
                   tags && tags.map(tag => {
                        return (
                            <li key={String(tag.id)}>
                                <ButtonText 
                                    title={tag.name} 
                                    onClick={() => handleTagSelected(tag.name)} 
                                    isActive={tagsSelected.includes(tag.name)}
                                />
                            </li>
                        )
                   })
                }
            </Menu>

            <Search>
                <Input 
                    placeholder="Pesquisar pelo titulo" 
                    icon={FiSearch} 
                    onChange={(e) => setSearch(e.target.value)}
                />
            </Search>

            <Content>
                <Section title="Minhas notas">
                    {   
                        notes.map(note => 
                            (
                                <Note 
                                    onClick={() => handleDetails(note.id)}
                                    key={String(note.id)}
                                    data={note}
                                />
                            )
                        )
                    }
                </Section>
                
            </Content>

            <NewNote to="/new">
                <FiPlus/>
                Criar nota
            </NewNote>
        </Container>
    )
}