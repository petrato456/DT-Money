export interface ModalProps {
    isOpen: boolean;
    closeModal: () => void;
    result: (dataForm: FormValues) => void;
}

export interface FormValues {
    category: string;
    price: number;
    description: string;
    data: string;
    type: string;
    id?: number;
}
