import { StyleInput } from "./styles";
import { InputProps } from "./types";

export default function Input({ typedText, ...rest }: InputProps) {
    function handleValueSearch(text: string) {
        typedText(text);
    }

    return (
        <StyleInput>
            <input
                onChange={(e) => handleValueSearch(e.target.value)}
                {...rest}
            />
        </StyleInput>
    );
}
