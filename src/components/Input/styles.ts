import styled from "styled-components";

export const StyleInput = styled.div`
    width: 100%;
    input {
        width: 100%;
        max-width: 957px;
        height: 54px;

        padding: 15px;

        background-color: ${(props) => props.theme.colors.shape3};
        color: ${(props) => props.theme.colors.white};

        font-size: 1rem;

        border-radius: 6px;
        border: none;
        outline: none;

        &::placeholder {
            color: ${(props) => props.theme.colors.placeholder};
        }
        @media (min-width: 992px) {
            padding-left: 32px;
        }
    }
`;
