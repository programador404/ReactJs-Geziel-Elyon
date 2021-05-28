import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  :root {
    --white: #fff;
    --icy: #f4f4f6;
    --black: #000;
    --blue: #0962ed;
    --red: #ed125f;
  }

  html {
    @media(max-width: 1080px) {
      font-size: 93.75%;
    }

    @media(max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    background-color: var(---white);
    -webkit-font-smooting: antialiased;
  }

  body, input, textarea, button {
    font-family: "Poppins", sans-serif;
    font-weight: 400;
  }

  h1, h2,h3, h4, h5, h6 {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }
`;