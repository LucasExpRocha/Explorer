import styled from "styled-components";

export const Container = styled.span`
    padding: .375rem 1rem;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_800};
    color: ${({theme}) => theme.COLORS.TAG};

    border-radius: .5rem;
`;