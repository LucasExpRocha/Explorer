import { Tag } from '../Tags'
import { Container } from './styles'

export function Card(){
    return (
        <Container>
            <h1>Interestellar</h1>
            <div>
                <div>
                    *****
                </div>
                <div>
                    ****
                </div>
            </div>
            <p>Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se comunicar com ela. Pai e filha descobrem que o "fantasma" é uma inteligência desconhecida que está enviando mensagens codificadas através de radiação gravitacional, deixando coordenadas em binário que os levam até uma instalação secreta da NASA ...
            </p>
            <div>
                <Tag title="Ficção Científica"/><Tag title="Drama"/>
            </div>
        </Container>
    )
}