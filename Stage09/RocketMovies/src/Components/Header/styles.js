import styled from "styled-components";

export const Container = styled.header`
    grid-area: Header;

    width: 100%;
    height: 7.25rem;
    padding: 1.5rem 7.5rem;

    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 4rem;

    border-bottom: 1px solid ${({theme}) => theme.COLORS.BACKGROUND_700};

    > h1 {
        font-size: 1.5rem;
        line-height: 2rem;
        color: ${({theme}) => theme.COLORS.PINK};
    }

    > input {
        width: clamp(3rem, 0.5rem+20vw, 50rem);
    }

    > div:last-child {
        display: flex;
        align-items: center;
        
        gap: .5rem;

        max-width: 15.375rem;

        div {
            width: 70%;

            display: flex;
            flex-direction: column;
            justify-content: flex-end;

            h1 {
                font-size: .875rem;
                line-height: 1.125rem;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }
    
            button {
                border: none;
                background: transparent;
                text-align: end;

                color: ${({theme}) => theme.COLORS.PINK};
                font-size: small;
            }
        }


        img {
            height: 4rem;
            width: 4rem;
            overflow: hidden;
            object-fit: cover;
            border-radius: 50%;
            border: 1px solid ${({theme}) => theme.COLORS.BACKGROUND_700};
        }
    }
`;