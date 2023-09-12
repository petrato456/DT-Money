import { ButtonProps } from "./types";

import { StyledButton } from "./styles";

export default function Button({ size, children, ...rest }: ButtonProps) {
    return (
        <StyledButton size={size} {...rest}>
            {children}
        </StyledButton>
    );
}
