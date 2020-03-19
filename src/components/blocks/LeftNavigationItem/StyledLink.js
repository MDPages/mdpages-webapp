import styled, { css } from 'styled-components'
import Text from './Text'

const show = css`

`

const StyledLink = styled.a`
  display: flex;
  align-items: center;
  padding: 3px 25px 3px 0;
  cursor: pointer;
  border-left: 2px solid #282d37;
  transition: 300ms all;
  text-decoration: none;
  
  &:hover > ${Text} {
    background-color: #323844;
  }
  
  ${props => props.show & show}
`

export default StyledLink
