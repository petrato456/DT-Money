import { useState } from "react";

import { LuSearch } from "react-icons/lu";
import { AiOutlineCalendar, AiOutlineCaretRight } from "react-icons/ai";
import { CgArrowDownO, CgArrowUpO } from "react-icons/cg";
import { MdOutlineAttachMoney } from "react-icons/md";

import { ToastContainer, toast } from "react-toastify";

import Logo from "./assets/Logo.svg";

import { initialValuesCard, months } from "./Datas";

import Button from "./components/Button";
import Card from "./components/Card";
import Input from "./components/Input";
import Modal from "./components/Modal";

import {
    ButtonSearch,
    CardTransactions,
    Container,
    ContainerCard,
    ContainerCardsValues,
    ContainerSearch,
    Header,
    Image,
    Main,
    Transactions,
} from "./styles/Home";

import "react-toastify/dist/ReactToastify.css";

interface ValuesProps {
    description: string;
    price: number;
    category: string;
    type: string;
    data: string;
    id?: number;
}

function App() {
    const [values, setValues] = useState<ValuesProps[]>(initialValuesCard);
    const [isOpen, setIsOpen] = useState(false);
    const [searchValue, setSearchValue] = useState("");
    const [search, setSearch] = useState("");

    const valuesEntrys = values.filter((type) => type.type === "entry");
    const arrayValuesEntrys = valuesEntrys.map((price) => price.price);

    const valuesExit = values.filter((type) => type.type === "exit");
    const arrayValuesExit = valuesExit.map((price) => price.price);

    const dayOfLastEntry = values
        .filter((type) => type.type === "entry")
        ?.slice(-1)[0]
        ?.data.split("/")[0];

    const monthOfLastEntry = values
        .filter((type) => type.type === "entry")
        ?.slice(-1)[0]
        ?.data.split("/")[1];

    const dayOfLastExit = values
        .filter((type) => type.type === "exit")
        ?.slice(-1)[0]
        ?.data.split("/")[0];

    const monthOfLastExit = values
        .filter((type) => type.type === "exit")
        ?.slice(-1)[0]
        ?.data.split("/")[1];

    const lastTransactionData = values.slice(-1)[0].data;

    const getMonthLastEntry = monthOfLastEntry?.includes("0")
        ? monthOfLastEntry.split("")[1]
        : monthOfLastEntry;

    const getMonthLastExit = monthOfLastExit?.includes("0")
        ? monthOfLastExit.split("")[1]
        : monthOfLastExit;
    function handleData(newData: ValuesProps) {
        const list = values.length;
        newData.id = list + 1;

        const newState = [...values, newData];

        setValues(newState);
        setIsOpen(!isOpen);

        toast.success("Transação salva com sucesso!");
    }

    let amountEntry = 0;
    for (let i = 0; i < arrayValuesEntrys.length; i++) {
        if (typeof arrayValuesEntrys[i] === "number") {
            amountEntry = amountEntry + arrayValuesEntrys[i];
        } else {
            const value = Number(arrayValuesEntrys[i]);
            if (isNaN(value) === false) {
                amountEntry = amountEntry + value;
            }
        }
    }
    let amountExit = 0;
    for (let i = 0; i < arrayValuesExit.length; i++) {
        if (typeof arrayValuesExit[i] === "number") {
            amountExit = amountExit + arrayValuesExit[i];
        } else {
            const value = Number(arrayValuesExit[i]);
            if (isNaN(value) === false) {
                amountExit = amountExit + value;
            }
        }
    }
    const ValueEntryTransactions = amountEntry;

    const ValueExitTransactions = amountExit;

    return (
        <>
            <ToastContainer />
            <Header>
                <Container>
                    <Image src={Logo} />
                    <Button size="small" onClick={() => setIsOpen(!isOpen)}>
                        Nova transação
                    </Button>
                </Container>
            </Header>
            <Modal
                isOpen={isOpen}
                closeModal={() => setIsOpen(!isOpen)}
                result={(dataForm) => handleData(dataForm)}
            />
            <Main>
                <ContainerCard>
                    <Card
                        title="Entradas"
                        price={ValueEntryTransactions}
                        data={`Última entrada em ${dayOfLastEntry} ${
                            months[getMonthLastEntry as unknown as number]
                        }`}
                        type="entry"
                        icon={<CgArrowUpO />}
                    />
                    <Card
                        title="Saídas"
                        price={ValueExitTransactions}
                        data={`Última entrada em ${dayOfLastExit} ${
                            months[getMonthLastExit as unknown as number]
                        }`}
                        type="exit"
                        icon={<CgArrowDownO />}
                    />
                    <Card
                        title="Total"
                        price={ValueEntryTransactions - ValueExitTransactions}
                        data={`De 13/05/2023 até ${lastTransactionData}`}
                        type="total"
                        icon={<MdOutlineAttachMoney />}
                    />
                </ContainerCard>
                <Container>
                    <Transactions>
                        <h1>Transações</h1>
                        <p>{values.length} itens</p>
                    </Transactions>
                </Container>
                <ContainerSearch>
                    <Input
                        placeholder="Busque uma transação"
                        typedText={(text) => setSearch(text)}
                    />
                    <ButtonSearch onClick={() => setSearchValue(search)}>
                        <LuSearch />
                    </ButtonSearch>
                </ContainerSearch>
                <ContainerCardsValues>
                    {values &&
                        values
                            .filter(
                                (item) =>
                                    item.category
                                        .toLocaleLowerCase()
                                        .includes(
                                            searchValue.toLocaleLowerCase()
                                        ) ||
                                    item.description
                                        .toLocaleLowerCase()
                                        .includes(
                                            searchValue.toLocaleLowerCase()
                                        )
                            )
                            .map((content) => (
                                <CardTransactions
                                    key={content.id}
                                    typetransaction={content.type}
                                >
                                    <h1>{content.description}</h1>
                                    <h2>
                                        {content.type === "exit" && "-"} R${" "}
                                        {content.price}
                                    </h2>
                                    <footer>
                                        <div className="text">
                                            <AiOutlineCaretRight className="icon" />
                                            <p>{content.category}</p>
                                        </div>
                                        <div className="text">
                                            <AiOutlineCalendar className="icon" />
                                            <p>{content.data}</p>
                                        </div>
                                    </footer>
                                </CardTransactions>
                            ))}
                </ContainerCardsValues>
            </Main>
        </>
    );
}

export default App;
