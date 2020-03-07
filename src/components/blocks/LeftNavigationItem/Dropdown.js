import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'

// This calculation is only used for more quality transition
const show = css`
  height: calc(39 * ${props => props.length}px);
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
