import styled from 'styled-components'
import Icon from './Icon'
import StyledLink from './StyledLink'
import Text from './Text'
import Dropdown from './Dropdown'
import Arrow from './Arrow'
const LeftNavigationItem = styled.li`
  overflow: hidden;
  display: block;
  border-left: 2px solid #282d37;
  transition: 200ms border-left-color;
  
  &:hover {
    border-left-color: #E96B72;
    
    > ${StyledLink} {
      > ${Icon} {
        color: #E96B72;
      }
      
      > ${Text} {
        color: #E96B72;
      }
    }
  }
`

LeftNavigationItem.StyledLink = StyledLink
LeftNavigationItem.Icon = Icon
LeftNavigationItem.Text = Text
LeftNavigationItem.Dropdown = Dropdown
LeftNavigationItem.Arrow = Arrow

export default LeftNavigationItem
