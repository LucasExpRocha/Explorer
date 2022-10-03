import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    
    display: grid;
    grid-template-rows: 7.25rem auto;
    grid-template-areas:    
    "Header" 
    "Content";
    
    > main {
        grid-area: Content;
        overflow-y: auto;
        padding: 2.5rem 7.5rem 0;

        > a {
            justify-content: start;
            margin-bottom: 1.5rem;
        }

        > div {
            display: flex;
            margin-bottom: 2.5rem;

            h1 {
                font-size: 2.25rem;
                line-height: 3rem;
                font-weight: 500;
            }

            span {
                margin-right: .5rem;
            }
        }
        
        > section {
            margin-bottom: 2.5rem;
            display: flex;
            gap: .5rem;
            align-items: center;

            img {
                height: 1rem;
                width: 1rem;
                border: 1px solid;
                border-radius: 50%;
            }

            svg {
                fill: ${({theme}) => theme.COLORS.PINK};
            }
        }
    }
`;