import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

 * {    
    padding: 0;
    margin: 0;
    
    font-family: ${(props) => props.theme.fonts.family};
    
    box-sizing: border-box;
  }
  html {
    background-color: ${(props) => props.theme.colors.shape2};
  }
`;

export default GlobalStyle;
