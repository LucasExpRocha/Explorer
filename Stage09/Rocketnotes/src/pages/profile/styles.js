import styled from "styled-components";

export const Container = styled.div`
    width: 100%;

    > header {
        width: 100%;
        height: 9rem;

        background: ${({theme}) => theme.COLORS.BACKGROUND_900};

        display: flex;
        align-items: center;

        padding: 0 7.75rem;

        svg {
            color: ${({theme}) => theme.COLORS.GRAY_100};
            font-size: 1.5rem;
        }
    }
`;

export const Form = styled.form`
    max-width: 21.25rem;
    margin: -5.25rem auto 0;

    > button {
        margin-top: 5rem;
    }

    > div:nth-child(4) {
        margin-top: 1.5rem;
    }
`;

export const Avatar = styled.div`
    position: relative;
    margin: 0 auto 2rem;

    width: 11.5rem;
    height: 11.5rem;

    > img {
        width: 11.5rem;
        height: 11.5rem;

        border-radius: 50%;
    }

    > label {
        width: 3rem;
        height: 3rem;

        background: ${({theme}) => theme.COLORS.ORANGE};

        display: flex;
        align-items: center;
        justify-content: center;

        position: absolute;
        bottom: .5rem;
        right: .5rem;
        border-radius: 50%;

        cursor: pointer;

        input {
            display: none;
        }

        svg {
            width: 1.25rem;
            height: 1.25rem;

            color: ${({theme}) => theme.COLORS.BACKGROUND_900};
            cursor: pointer;

            path {
                cursor: pointer;
            }
        }
    }
`;