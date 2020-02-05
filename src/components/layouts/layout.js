import React from 'react'
import GlobalStyles from './globalStyles'
import { ThemeProvider } from 'styled-components'
import PropTypes from 'prop-types'

const Layout = (props) => {
  const theme = {
    breakpoints: {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 992
    }
  }
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {props.children}
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
