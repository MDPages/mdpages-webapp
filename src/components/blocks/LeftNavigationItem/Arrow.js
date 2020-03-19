import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Arrow = styled(FontAwesomeIcon)`
  position: absolute;
  top: 12px;
  right: 10px;
  color: #7B7D8E;
  cursor: pointer;
  transform: rotate(-90deg);
  transition: 250ms transform;
  display: flex;
  justify-content: center;
`

export default Arrow
