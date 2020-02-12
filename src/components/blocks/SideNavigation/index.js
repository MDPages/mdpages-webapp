import styled from 'styled-components'
import Image from './Image'
import List from './List'

const SideNavigation = styled.nav`
  width: 250px;
  background-color: #282d37;
  min-height: 100vh;
  max-height: 100vh;
`

SideNavigation.Image = Image
SideNavigation.List = List

export default SideNavigation
