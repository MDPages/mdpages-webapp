import styled from 'styled-components'
import LeftNavigationItem from '../LeftNavigationItem'

const List = styled.ol`
  & > ${LeftNavigationItem} {
    position: relative;
  }
`

export default List
