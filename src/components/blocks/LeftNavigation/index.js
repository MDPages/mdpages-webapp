import styled from 'styled-components'
import Image from './Image'
import List from './List'

const LeftNavigation = styled.nav`
  width: 250px;
  background-color: #282d37;
  min-height: 100vh;
  max-height: 100vh;
`

LeftNavigation.Image = Image
LeftNavigation.List = List

export default LeftNavigation