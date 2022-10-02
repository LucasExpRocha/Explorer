import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled(Link)`
    font-size: 1rem;
    line-height: 1.25rem;
    color: ${({theme}) => theme.COLORS.PINK};

    display: flex;
    align-items: center;
    justify-content: center;
    gap: .5rem;
`;