import styled from 'styled-components'
import Icon from './Icon'
import Text from './Text'

const StyledLink = styled.a`
  display: flex;
  align-items: center;
  padding: 0 25px 0 0;
  cursor: pointer;
  border-left: 2px solid #282d37;
  transition: 300ms all;
  
  &:hover {
    border-left-color: #E96B72;
    
    ${Icon} {
      color: #E96B72;
    }
    
    ${Text} {
      color: #E96B72;
      background-color: #323844;
    }
  }
`

export default StyledLink
