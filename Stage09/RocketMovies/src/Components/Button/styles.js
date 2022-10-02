import styled from "styled-components";

export const Container = styled.button`
    width: 100%;
    height: 3.5rem;

    border-radius: .625rem;
    border: none;

    background-color: ${({theme}) => theme.COLORS.PINK};
    color: ${({theme}) => theme.COLORS.BACKGROUND};

    font-size: 1rem;
    font-weight: 500;
    line-height: 1.25rem;
`;