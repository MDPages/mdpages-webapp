import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
import Arrow from './Arrow'
import LeftNavigationItem from './index'
import StyledLink from './StyledLink'

// This calculation is only used for more quality transition
const show = css`
  height: calc(39 * ${props => props.length}px);
  
  ${Arrow} {
    transform: rotate(0);
  }
`

const Dropdown = styled.ol`
  background-color: #1f232d;
  height: 0;
  border-left: 2px solid #1f232d;
  transition: 200ms all;
  
  ${LeftNavigationItem} ${StyledLink} {
    border-left-color: #1f232d;
  }
  
  ${props => props.show && show}
`

Dropdown.propTypes = {
  show: PropTypes.bool.isRequired,
  length: PropTypes.number.isRequired
}

export default Dropdown
