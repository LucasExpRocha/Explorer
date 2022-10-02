import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        background-color: ${({theme}) => theme.COLORS.BACKGROUND};
        color: ${({theme}) => theme.COLORS.WHITE};

        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    body, input, button, textarea {
        font-family: 'Roboto Slab', serif;
        font-size: 1rem;
        outline: none;
    }
    a {
        text-decoration: none;
    }
    button, a{
        cursor: pointer;
        transition: filter .2s;
    }
    button:hover, a:hover {
        filter: brightness(.9);
    }
`;