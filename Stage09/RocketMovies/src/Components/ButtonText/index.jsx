import { Container } from "./styles"

export function ButtonText({icon: Icon, title, to, ...rest}){
    return (
        <Container to={to} {...rest}>
            {Icon && <Icon size={20}/>}
            {title}
        </Container>
    )
}