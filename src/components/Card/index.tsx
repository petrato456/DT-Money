import { CardProps } from "./types";

import { CardPrice, Footer, Header } from "./styles";

export default function Card({ title, price, data, type, icon }: CardProps) {
    return (
        <CardPrice type={type}>
            <Header type={type}>
                <h1>{title}</h1>
                <div className="icon">{icon}</div>
            </Header>
            <Footer type={type}>
                <h2>R$ {price}</h2>
                <p>{data}</p>
            </Footer>
        </CardPrice>
    );
}
