import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;

    background-color: ${({theme, isNew}) => isNew ? "transparent" : theme.COLORS.BACKGROUND_900};
    color: ${({theme}) =>  theme.COLORS.BORDER};

    border: ${({theme, isNew}) => isNew ? `1px dashed ${theme.COLORS.BORDER}` : "none"};

    border-radius: .625rem;
    padding-right: 1rem;

    > button {
        border: none;
        background: none;
    }

    .button-delete {
        max-width: 7rem;
        color: ${({theme}) => theme.COLORS.PINK};
    }

    .button-add {
        color: ${({theme}) => theme.COLORS.PINK};
    }

    > input {
        height: 3.5rem;

        padding: .75rem;

        color: ${({theme}) => theme.COLORS.WHITE};
        background: transparent;
        border: none;

        &::placeholder {
            color: ${({theme}) => theme.COLORS.BORDER};
        }
    }
`;