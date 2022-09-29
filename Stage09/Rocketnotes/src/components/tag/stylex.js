import styled from "styled-components";

export const Container = styled.span`
    font-size: 0.875rem;
    padding: .375rem .875rem;
    border-radius: .375rem;
    margin-right: .375rem;
    color: ${({theme}) => theme.COLORS.BACKGROUND_900};
    background-color: ${({theme}) => theme.COLORS.ORANGE};
`;