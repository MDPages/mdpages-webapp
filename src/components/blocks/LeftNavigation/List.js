import styled from 'styled-components'
import LeftNavigationItem from '../LeftNavigationItem'

const List = styled.ol`
  margin-bottom: 100px;
  
  & > ${LeftNavigationItem} {
    position: relative;
  }
`

export default List
