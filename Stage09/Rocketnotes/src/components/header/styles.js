import styled from "styled-components";

export const Container = styled.header`
    grid-area: header;

    height: 6.5rem;
    width: 100%;

    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${({theme}) => theme.COLORS.BACKGROUND_700};

    display: flex;
    justify-content: space-between;

    padding: 0 5rem;
`;

export const Profile = styled.div`
    display: flex;
    align-items: center;
    gap: .75rem;

    > img {
        width: 4rem;
        height: 4rem;
        border-radius: 50%;
    }

    > div {
        display: flex;
        flex-direction: column;
        line-height: 1.5rem;

        span {
            font-size: 0.875rem;
            color: ${({theme}) => theme.COLORS.GRAY_100}
        }

        strong {
            font-size: 1.275rem;
            color: ${({theme}) => theme.COLORS.WHITE}
        }
    }
`;

export const Logout = styled.button`
    border: none;
    background: transparent;

    > svg {
        color: ${({theme}) => theme.COLORS.GRAY_100};
        font-size: 2.25rem;
        cursor: pointer;

        path {
            cursor: pointer;
        }
    }
`;