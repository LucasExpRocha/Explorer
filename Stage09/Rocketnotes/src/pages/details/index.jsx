import { Container, Links, Content } from "./styles";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import { Button } from "../../components/buttons";
import { ButtonText } from "../../components/buttonText";
import { Header } from "../../components/header";
import { Section } from "../../components/section";
import { Tag } from "../../components/tag";
import { api } from "../../services/api";

export function Details() {
  const params = useParams();
  const navigate = useNavigate();

  const [data, setData] = useState(null);

  function handleBack(){
    navigate(-1)
  }

  async function handleNoteRemove(){
    const confirm = window.confirm("Deseja realmente remover está nota?")

    if(confirm){
      await api.delete(`/notes/${params.id}`)
      handleBack()
    }
  }

  useEffect(() => {
    async function fetchNotes() {
      const response = await api.get(`/notes/${params.id}`);
      setData(response.data);
      console.log(response.data);
    }
    fetchNotes();
  }, []);

  return (
    <Container>
      <Header />
      {data && (
        <main>
          <Content>
            <ButtonText title="Excluir nota" onClick={handleNoteRemove}/>

            <h1>{data.title}</h1>
            <p>{data.description}</p>
            {data.links && (
              <Section title="Links úteis">
                <Links>
                  {data.links.map((link) => (
                    <li key={String(link.id)}>
                      <a href={link.url}>{link.url}</a>
                    </li>
                  ))}
                </Links>
              </Section>
            )}
            {data.tags && (
              <Section title="Marcadores">
                {data.tags.map((tag) => (
                  <Tag key={String(tag.id)} title={tag.name} />
                ))}
              </Section>
            )}
            <Button title="Voltar" onClick={handleBack}/>
          </Content>
        </main>
      )}
    </Container>
  );
}
