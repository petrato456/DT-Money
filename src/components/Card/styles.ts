import styled from "styled-components";

interface TypeProps {
    type: "entry" | "exit" | "total";
}

export const CardPrice = styled.div<TypeProps>`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    width: 280px;
    min-width: 280px;
    height: 150px;

    padding: 24px 32px;

    background-color: ${(props) =>
        props.type === "total"
            ? props.theme.colors.greenDark
            : props.theme.colors.background};

    border-radius: 6px;

    @media (min-width: 760px) {
        width: 352px;
        height: 137px;
    }
`;

export const Header = styled.header<TypeProps>`
    display: flex;
    justify-content: space-between;

    h1 {
        color: ${(props) => props.theme.colors.text};

        font-size: 1rem;
    }
    .icon {
        color: ${(props) => {
            switch (props.type) {
                case "entry":
                    return `${props.theme.colors.green}`;
                case "exit":
                    return `${props.theme.colors.red}`;
                case "total":
                    return `${props.theme.colors.white}`;
            }
        }};

        font-size: 2rem;
    }
`;

export const Footer = styled.footer<TypeProps>`
    h2 {
        margin-bottom: 10px;

        color: ${(props) => props.theme.colors.title};

        font-size: 1.5rem;
    }
    p {
        color: ${(props) =>
            props.type === "total"
                ? props.theme.colors.white
                : props.theme.colors.placeholder};

        font-size: 0.875rem;
    }
`;
