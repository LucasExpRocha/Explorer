import { Container } from "./stylex";

export function Tag({ title, ...rest}){
    return (
        <Container {...rest}>
            {title}
        </Container>
    )
}