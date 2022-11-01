import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 6.5rem auto;
    grid-template-areas: 
    "header"
    "content";

    > main {
        grid-area: content;
        overflow-y: auto;
    }

    .tags {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: .675rem;
    }
`;

export const Form = styled.form`
    max-width: 34.5rem;
    margin: 2.25rem auto;

    > header {
        display: flex;
        align-items: center;
        justify-content: space-between;

        margin-bottom: 2.25rem;
    }
`;