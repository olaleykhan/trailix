// globalStyles.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  html,
body {
  padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    font-size: 10px;
    
  @media only screen and (min-width: 480px) {
       font-size: 12px;
}
  @media only screen and (min-width: 768px) {
       font-size: 14px;
}
  @media only screen and (min-width: 1024px) {
       font-size: 16px;
}
  @media only screen and (min-width: 1600px) {
       font-size: 18px;
}
  @media only screen and (min-width: 2000px) {
       font-size: 20px;
}
`;

export default GlobalStyle;
