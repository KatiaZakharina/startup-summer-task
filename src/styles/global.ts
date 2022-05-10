import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

import { BLACK } from './constant';

export const GlobalStyles = createGlobalStyle`
 ${normalize}
 
  *, *::after, *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  :root {
      font-size: 14px;

      @media (min-width: 480px) {
        font-size: 14px;
      }
      @media (min-width: 768px) {
        font-size: 16px;
      }
      @media (min-width: 1440px) {
        font-size: 18px;
      }
      @media (min-width: 1600px) {
        font-size: 20px;
      }
    }

  body, html {
    height: 100%;
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    color: ${BLACK};
  }

  #root{
    display: flex;
    flex-direction: column;
    min-height: 100%;
  }
`;
