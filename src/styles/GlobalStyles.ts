import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #0f172a;
    color: white;
    font-family: 'Inter', sans-serif;
  }

  input {
    font-family: inherit;
  }
`;

export default GlobalStyle;
