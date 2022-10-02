import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 7.25rem auto;
    grid-template-areas:    
    "Header" 
    "Content";
`;

export const Main = styled.main`
    grid-area: Content;

    height: 100%;
    overflow-y: auto;

    padding: 3.25rem 7.5rem;

    > div {
        display: flex;

         justify-content: space-between;

         h1 {
            font-size: 2rem;
            font-weight: 400;
            line-height: 2.625rem;
        }

         button {
            width: 13rem;
            height: 3rem;

             display: flex;
            justify-content: center;
            align-items: center;
        }
    }
`;

export const Section = styled.section`
    margin-top: 2rem;
    max-height: 45rem;
    overflow-y: auto;

    div + div {
        margin-top: 1.5rem;
    }

    &::-webkit-scrollbar {
        width: 8px;
        background: transparent; 
    }

    &::-webkit-scrollbar-thumb {
        border-radius: .5rem;
        background-color: ${({theme}) => theme.COLORS.PINK};
        border: 2px solid ${({theme}) => theme.COLORS.BACKGROUND};
    }

`;