import styled from "styled-components";

interface CardTransactionsProps {
    typetransaction: string;
}

export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    width: 100%;
    height: 200px;

    padding: 56px 0;

    background-color: ${(props) => props.theme.colors.shape3};

    @media (min-width: 760px) {
        padding-top: 0px;
    }
`;

export const Image = styled.img`
    width: 117px;
    height: 25px;

    margin-top: 5px;

    @media (min-width: 760px) {
        width: 172px;
        height: 41px;
    }
`;
export const Container = styled.div`
    display: flex;
    justify-content: space-between;

    width: 100%;
    max-width: 1120px;

    padding: 0 24px;

    @media (min-width: 760px) {
        margin: auto;
    }
    @media (min-width: 1120px) {
        padding: 0;
    }
`;

export const ContainerCard = styled.div`
    display: flex;
    gap: 15px;

    width: 100%;
    max-width: 1120px;

    padding: 0px 24px;

    position: absolute;
    top: -65px;

    z-index: -1;

    overflow-x: scroll;
    &::-webkit-scrollbar {
        display: none;
    }

    @media (min-width: 760px) {
        justify-content: space-between;
    }
    @media (min-width: 1120px) {
        padding: 0;

        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
    }
`;

export const Main = styled.main`
    width: 100%;
    height: calc(100% - 200px);

    background-color: ${(props) => props.theme.colors.shape2};

    padding-top: 110px;
    padding-bottom: 50px;

    position: relative;

    z-index: 0;
`;

export const Transactions = styled.div`
    display: flex;
    justify-content: space-between;

    width: 100%;

    h1 {
        color: ${(props) => props.theme.colors.text};

        font-size: 1.125rem;
    }
    p {
        color: ${(props) => props.theme.colors.placeholder};

        font-size: 1rem;
    }
`;

export const ContainerSearch = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 10px;

    width: 100%;
    max-width: 1120px;

    padding: 20px 24px;

    @media (min-width: 760px) {
        margin: auto;
    }
    @media (min-width: 1120px) {
        padding: 20px 0;
    }
`;

export const ButtonSearch = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 54px;
    min-width: 54px;
    height: 54px;

    background-color: transparent;
    color: ${(props) => props.theme.colors.greenLight};

    font-size: 1.375rem;

    border: 1px solid ${(props) => props.theme.colors.greenLight};
    border-radius: 6px;

    cursor: pointer;

    &:hover {
        background-color: ${(props) => props.theme.colors.greenLight};
        color: ${(props) => props.theme.colors.white};
    }
    @media (min-width: 760px) {
        width: 100%;
        max-width: 147px;
    }
`;

export const ContainerCardsValues = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 10px;

    width: 100%;
    max-width: 1120px;

    padding: 0px 24px;

    @media (min-width: 760px) {
        margin: auto;
    }
    @media (min-width: 1120px) {
        padding: 20px 0;
    }
`;

export const CardTransactions = styled.div<CardTransactionsProps>`
    display: flex;
    flex-direction: column;
    gap: 15px;

    width: 100%;
    height: 140px;

    background-color: ${(props) => props.theme.colors.shape1};

    padding: 20px;

    border-radius: 6px;

    h1 {
        color: ${(props) => props.theme.colors.text};

        font-size: 1rem;
    }
    h2 {
        color: ${(props) =>
            props.typetransaction === "exit"
                ? props.theme.colors.red
                : props.theme.colors.greenLight};
        font-size: 1.25rem;
    }
    footer {
        display: flex;
        justify-content: space-between;

        .text {
            display: flex;
            align-items: center;
            gap: 5px;

            color: ${(props) => props.theme.colors.text};
        }
    }
    @media (min-width: 992px) {
        align-items: center;
        flex-direction: row;

        height: 66px;

        padding: 20px 32px;

        h1 {
            min-width: 40%;
        }
        h2 {
            min-width: 20%;
        }
        footer {
            width: 100%;
            .text {
                .icon {
                    display: none;
                }
            }
        }
    }
`;
