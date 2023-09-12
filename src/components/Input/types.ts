export interface InputProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    typedText: (text: string) => void;
}
