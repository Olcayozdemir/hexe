import { createGlobalStyle } from "styled-components";

const GlobalStyleTheme = createGlobalStyle`
    
    body {
      margin:0;
      ::-webkit-scrollbar {
        display: none;
        -webkit-appearance: none;
    }
    }
    *{
        font-family: Helvetica Neue,Helvetica,Arial,Lucida Grande,sans-serif;
    }
 `;

export default GlobalStyleTheme;
