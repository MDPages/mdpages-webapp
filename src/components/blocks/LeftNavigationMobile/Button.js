import styled from 'styled-components'
import Icon from './Icon'

const Button = styled.button`
  position: absolute;
  top: 5px;
  right: -20px;
  padding: 8px 11px;
  background-color: #1f232d;
  border: unset;
  border-radius: 5px;
  user-select: none;
  display: none;
  
  &:focus {
    outline: none;
    ${Icon} {
      color: #E96B72;
    }
  }
`

export default Button
