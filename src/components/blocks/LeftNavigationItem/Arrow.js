import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Arrow = styled(FontAwesomeIcon)`
  position: absolute;
  top: 10px;
  right: 0;
  color: #7B7D8E;
  cursor: pointer;
  transform: rotate(-90deg);
  transition: 250ms transform;
  width: 25px!important;
  display: flex;
  justify-content: center;
`

export default Arrow
