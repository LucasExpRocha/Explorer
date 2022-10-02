import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    padding: 2rem;
    border-radius: 1rem;
    background-color: ${({theme}) => theme.COLORS.PINK_LIGHT};

    
    > h1 {
        font-size: 1.5rem;
        line-height: 2rem;
        font-weight: 700;
    }
    
    > div {
        position: relative;
        
        div:nth-child(1) {
            opacity: .5;
            font-size: 2rem;
        }

        div:nth-child(2) {
            position: absolute;
            font-size: 2rem;
        }
    }

    > p {
        max-height: 3.5rem;
        margin-top: 1rem;
        margin-bottom: 1rem;

        font-size: 1rem;
        line-height: 1.25rem;
        font-weight: 400;

        color: ${({theme}) => theme.COLORS.TEXT_CARD};

        overflow: hidden;
        text-overflow: ellipsis;
    }

    > div {
        display: flex;
        gap: .5rem;
    }
`;