import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 7.25rem auto;
    grid-template-areas:    
    "Header" 
    "Content";  
    
    main {
        grid-area: Content;
        overflow-y: auto;
        padding: 3rem 7.5rem 0;
        
        > a {
            justify-content: start;
        }

        > h1 {
            font-size: 2rem;
            font-weight: 500;
            line-height: 3rem;

            margin-top: 1.5rem;
        }

        > section {
            display: flex;
            gap: 2.5rem;
            margin-top: 2.5rem;
            margin-bottom: 2.5rem;

            > button:first-child {
                background-color: #000;
                color: ${({theme}) => theme.COLORS.PINK};
            }
        }

        > p {
            margin-top: 2.5rem;
            margin-bottom: 1.5rem;

            font-size: 1.25rem;
            line-height: 1.5rem;

            color: ${({theme}) => theme.COLORS.TEXT_CARD};
        }       

        > div {
            border-radius: .5rem;
            padding: 1rem;
            gap: 1.5rem;

            display: grid;
            grid-template-columns: 1fr 1fr 1fr 1fr;
            align-items: center;
            flex-wrap: wrap;

            background-color: #000;
        }
    }

`;