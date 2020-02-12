import styled from 'styled-components'
import Icon from './Icon'
import StyledLink from './StyledLink'
import Text from './Text'

const SideNavigationItem = styled.li`
  overflow: hidden;
`

SideNavigationItem.StyledLink = StyledLink
SideNavigationItem.Icon = Icon
SideNavigationItem.Text = Text

export default SideNavigationItem
