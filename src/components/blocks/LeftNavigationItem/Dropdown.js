import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
import Arrow from './Arrow'

// This calculation is only used for more quality transition
const show = css`
  height: calc(39 * ${props => props.length}px);
  
  ${Arrow} {
    transform: rotate(0);
  }
`

const List = styled.ol`
  background-color: #1f232d;
  height: 0;
  transition: 200ms height;
  ${props => props.show && show}
`

List.propTypes = {
  show: PropTypes.bool.isRequired,
  length: PropTypes.number.isRequired
}

export default List
