import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after{
    box-sizing: border-box;
  }

  :root {
    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    line-height: 1.5;
    font-weight: 400;
  
    color-scheme: light dark;
    color: rgba(255, 255, 255, 0.87);
    background-color: #242424;
  
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html{
    display: flex;
    flex-direction: column;
    min-height: 100%;
    font-size: 62.5%; /* 1rem = 10px on base font of 16px */
  }

  body{
    font-size: 1.6rem;  /* Base 16px; */
    line-height: 1.5rem;
    margin: 0;

    display: flex;
    flex-direction: column;
    flex: 1;
  }

  #root{
    display: flex;
    flex-direction: column;
    flex: 1;
    width: 100%;
  }
`;
