import styled from "styled-components";
import { ButtonProps } from "./types";

export const StyledButton = styled.button<ButtonProps>`
    width: ${(props) => (props.size === "small" ? "130px" : "100%")};
    height: ${(props) => (props.size === "small" ? "38px" : "50px")};

    background-color: ${(props) => props.theme.colors.green};
    color: ${(props) => props.theme.colors.white};

    font-family: ${(props) => props.theme.fonts.family};
    font-size: ${(props) => (props.size === "small" ? "0.875rem" : "1rem")};

    border-radius: 6px;
    border: none;

    cursor: pointer;

    &:hover {
        background-color: ${(props) => props.theme.colors.greenLight};
    }

    @media (min-width: 760px) {
        width: ${(props) => (props.size === "small" ? "152px" : "100%")};
        height: 50px;
    }
`;
