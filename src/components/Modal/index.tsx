import { useState } from "react";
import ReactModal from "react-modal";

import { useForm, SubmitHandler } from "react-hook-form";
import { CgArrowUpO, CgArrowDownO } from "react-icons/cg";
import { AiOutlineClose } from "react-icons/ai";

import Button from "../Button";

import { zodResolver } from "@hookform/resolvers/zod";
import { validationSchema } from "../../helpers/Schema";

import { FormValues, ModalProps } from "./types";

import { Footer, StyleModal } from "./styles";
import { customStyles, voidValuesForm } from "../../Datas";

export default function Modal({ isOpen, closeModal, result }: ModalProps) {
    const [boxClicked, setBoxClicked] = useState("");
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<FormValues>({
        resolver: zodResolver(validationSchema),
    });

    const dateToday = new Date().toLocaleDateString();

    function resetForm() {
        reset(voidValuesForm);
        setBoxClicked("");
    }

    const onSubmit: SubmitHandler<FormValues> = (data: FormValues) => {
        const formData: FormValues = data;
        formData.data = dateToday;

        result(formData);

        if (formData) resetForm();
    };

    function closeAndReset() {
        closeModal();
        resetForm();
    }

    return (
        <ReactModal isOpen={isOpen} style={customStyles}>
            <StyleModal>
                <div className="content">
                    <div className="icon-close">
                        <AiOutlineClose onClick={() => closeAndReset()} />
                    </div>
                    <h1>Nova transação</h1>
                    <form onSubmit={handleSubmit(onSubmit) as () => void}>
                        <input
                            type="text"
                            placeholder="descrição"
                            {...register("description")}
                        />
                        {errors.description && (
                            <p className="error">
                                {errors.description.message}
                            </p>
                        )}

                        <input placeholder="preço" {...register("price")} />
                        {errors.price && (
                            <p className="error">{errors.price.message}</p>
                        )}

                        <input
                            type="text"
                            placeholder="categoria"
                            {...register("category")}
                        />
                        {errors.category && (
                            <p className="error">{errors.category.message}</p>
                        )}

                        <Footer>
                            <div
                                className="box-select"
                                onClick={() => setBoxClicked("entry")}
                            >
                                <input
                                    id="entry"
                                    type="radio"
                                    checked={boxClicked === "entry"}
                                    value="entry"
                                    {...register("type")}
                                />
                                <div className="select-card">
                                    <CgArrowUpO className="icon" />
                                    <p>Entrada</p>
                                </div>
                            </div>

                            <div
                                className="box-select"
                                onClick={() => setBoxClicked("exit")}
                            >
                                <input
                                    id="exit"
                                    type="radio"
                                    checked={boxClicked === "exit"}
                                    value="exit"
                                    {...register("type")}
                                />
                                <div className="select-card down">
                                    <CgArrowDownO className="icon down" />
                                    <p>Saída</p>
                                </div>
                            </div>
                        </Footer>

                        {errors.type && (
                            <p className="error type">{errors.type.message}</p>
                        )}

                        <Button size="large" type="submit">
                            Cadastrar
                        </Button>
                    </form>
                </div>
            </StyleModal>
        </ReactModal>
    );
}
