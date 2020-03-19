import { createGlobalStyle } from 'styled-components'
import 'reset-css'

const GlobalStyle = createGlobalStyle`
  @font-face {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      src: url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
  }
  
  * {
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }
`

export default GlobalStyle
