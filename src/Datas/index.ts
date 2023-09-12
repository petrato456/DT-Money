export const months = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
];

export const initialValuesCard = [
    {
        description: "Desenvolvimento de site",
        price: 100,
        category: "venda",
        type: "entry",
        data: "13/05/2023",
        id: 1,
    },
    {
        description: "Compra de carro",
        price: 50,
        category: "compra",
        type: "exit",
        data: "10/08/2023",
        id: 2,
    },
];


export const customStyles = {
    overlay: {
        backgroundColor: "rgba(00,00,00,0.8)",
    },
    content: {
        width: "100%",
        maxWidth: "535px",
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: `translate(-50%, -50%)`,
        background: "transparent",
        padding: "0",
        border: "none",
    },
};


export const voidValuesForm = {
    description: "",
    category: "",
    data: "",
    price: "" as unknown as number,
    type: "",
};