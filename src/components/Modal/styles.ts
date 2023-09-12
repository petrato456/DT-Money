import styled from "styled-components";

export const StyleModal = styled.div`
    width: 100%;
    min-height: 478px;

    background-color: ${(props) => props.theme.colors.shape2};

    padding: 24px;

    border-radius: 6px;

    .content {
        width: 100%;

        .icon-close {
            width: min-content;

            margin-left: auto;

            color: ${(props) => props.theme.colors.title};

            font-size: 1.5rem;

            cursor: pointer;
        }
    }

    h1 {
        color: ${(props) => props.theme.colors.title};
        font-size: 1.25rem;
    }
    form {
        display: flex;
        flex-direction: column;
        gap: 10px;

        margin-top: 25px;

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

        .error {
            color: ${(props) => props.theme.colors.redDark};
            font-size: 1.5;

            &.type {
                position: relative;
                bottom: 15px;
            }
        }
    }
`;

export const Footer = styled.footer`
    display: flex;
    gap: 10px;

    width: 100%;
    height: 58px;

    margin: 15px 0;

    .box-select {
        width: 100%;
        height: 100%;

        position: relative;
    }

    input {
        position: absolute;

        z-index: 2;
        opacity: 0;
    }

    .icon {
        font-size: 1.5rem;
    }
    :checked + .select-card {
        background-color: ${(props) => props.theme.colors.green};
        color: ${(props) => props.theme.colors.white};

        .icon {
            color: ${(props) => props.theme.colors.white};
        }
    }

    :checked + .down {
        background-color: ${(props) => props.theme.colors.red};
        .icon {
            color: ${(props) => props.theme.colors.white};
            &.down {
                color: ${(props) => props.theme.colors.white};
            }
        }
    }

    .select-card {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;

        width: 100%;
        height: 100%;

        background-color: ${(props) => props.theme.colors.shape1};
        color: ${(props) => props.theme.colors.text};

        font-size: 1rem;

        border-radius: 6px;

        z-index: 3;

        cursor: pointer;

        .icon {
            color: ${(props) => props.theme.colors.green};

            &.down {
                color: ${(props) => props.theme.colors.red};
            }
        }
    }
    input[type="radio"]:hover {
        cursor: pointer;
    }
`;
