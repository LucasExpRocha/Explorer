import { Container, Links, Content } from "./styles";

import { Button } from "../../components/buttons";
import { ButtonText } from "../../components/buttonText";
import { Header } from "../../components/header";
import { Section } from "../../components/section";
import { Tag } from "../../components/tag";

export function Details() {

  return (
    <Container>
      <Header/>
      <main>
        <Content>
          <ButtonText title="Excluir nota"/>

          <h1>Introdução ao React</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Labore quas reiciendis, numquam deserunt eveniet odit voluptatem obcaecati ullam eaque rem voluptate officiis? 
            Natus dolorem, ratione tempora sint sequi error deleniti.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Quidem nulla rem fugiat possimus obcaecati vero assumenda eveniet fugit dicta exercitationem. 
            Ipsum, nostrum quidem? Molestias iusto amet eius ipsa laboriosam sed?
          </p>

          <Section title="Links úteis">
            <Links>
              <li><a href="">www.rocketseat.com.br</a></li>
            </Links>
          </Section>

          <Section title="Marcadores">
            <Tag title="express"/>
            <Tag title="node"/>
          </Section>

          <Button title="Voltar"/>
        </Content>
      </main>
    </Container>
  )
}