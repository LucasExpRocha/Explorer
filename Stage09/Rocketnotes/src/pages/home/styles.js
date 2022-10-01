import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-columns: 16rem auto;
    grid-template-rows: 6.5rem 8rem auto 4rem;
    grid-template-areas: 
    "brand header"
    "menu search"
    "menu content"
    "newNote content";

    background-color: ${({theme}) => theme.COLORS.BACKGROUND_800};
`;
export const Brand = styled.div`
    grid-area: brand;

    display: flex;
    align-items: center;
    justify-content: center;

    border-bottom: 1px solid ${({theme}) => theme.COLORS.BACKGROUND_700};
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};

    > h1 {
        font-size: 1.5rem;
        color: ${({theme}) => theme.COLORS.ORANGE};
    }
`;
export const Menu = styled.ul`
    grid-area: menu;

    padding-top: 4rem;

    text-align: center;

    background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};

    > li {
        margin-bottom: 1.5rem;
    }
`;
export const Search = styled.div`
    grid-area: search;

    padding: 2rem 4rem;
`;
export const Content = styled.div`
    grid-area: content;
    padding: 0 4rem;
    overflow-y: auto;
`;
export const NewNote = styled(Link)`
    grid-area: newNote;

    background-color: ${({theme}) => theme.COLORS.ORANGE};
    color: ${({theme}) => theme.COLORS.BACKGROUND_900};
    font-weight: 700;

    border: none;

    display: flex;
    align-items: center;
    justify-content: center;

    gap: 0.5rem;
`;