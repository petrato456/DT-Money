export interface CardProps {
    title: string;
    price: string | number;
    data: string;
    type: "entry" | "exit" | "total";
    icon: JSX.Element;
}
