import { createGlobalStyle } from 'styled-components'
import 'reset-css'

const GlobalStyle = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css?family=Lato&display=swap');

  * {
    box-sizing: border-box;
    font-family: 'Lato', sans-serif;
  }
`

export default GlobalStyle
