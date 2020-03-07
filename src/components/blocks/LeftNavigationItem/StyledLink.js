import styled from 'styled-components'
import Text from './Text'

const StyledLink = styled.a`
  display: flex;
  align-items: center;
  padding: 3px 25px 3px 0;
  cursor: pointer;
  border-left: 2px solid #282d37;
  transition: 300ms all;
  
  &:hover >${Text} {
    background-color: #323844;
  }
`

export default StyledLink
