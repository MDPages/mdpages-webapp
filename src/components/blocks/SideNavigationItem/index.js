import styled from 'styled-components'
import Icon from './Icon'
import StyledLink from './StyledLink'
import Text from './Text'
import Dropdown from './Dropdown'

const SideNavigationItem = styled.li`
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

SideNavigationItem.StyledLink = StyledLink
SideNavigationItem.Icon = Icon
SideNavigationItem.Text = Text
SideNavigationItem.Dropdown = Dropdown

export default SideNavigationItem
