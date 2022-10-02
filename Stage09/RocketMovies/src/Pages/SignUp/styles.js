import styled from 'styled-components';
import BackgroundImg from '../../assets/background.png'

export const Container = styled.div`
    height: 100vh;

    display: flex;
`;

export const Form = styled.form`
    padding: 0 8.5rem;

    display: flex;
    justify-content: center;
    flex-direction: column;

    > h1 {
        font-size: 3rem;
        line-height: 4rem;
        color: ${({theme}) => theme.COLORS.PINK};
    }

    > p {
        font-size: .875rem;
        line-height: 1.25rem;
        color: ${({theme}) => theme.COLORS.TEXT_DESCRIPTION};
    }

    > h2 {
        font-size: 1.5rem;
        line-height: 2rem;
        margin: 3rem 0;
    }

    > button {
        margin-top: 1rem;
    }

    > a {
        text-align: center;
        margin-top: 3rem;
    }
`;

export const Background = styled.div`
    flex: 1;
    background: url(${BackgroundImg}) no-repeat center;
    background-size: cover;
`;