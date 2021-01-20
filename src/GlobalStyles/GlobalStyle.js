import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
   }

   body{
       color: #fff;
       font-family: ${({ theme }) => theme.font.main};
       background-color: ${({ theme }) => theme.colors.main}
   }

button {
    cursor: pointer;
    }

`;

export default GlobalStyle;
