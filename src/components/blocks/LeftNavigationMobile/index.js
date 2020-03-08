import styled, { css } from 'styled-components'
import Button from './Button'
import Icon from './Icon'

const show = css`
  transform: translateX(0);
`

const LeftNavigationMobile = styled.div`
  width: 250px;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  transition: 300ms transform;
  
  @media screen and (max-width: 768px) {
    transform: translateX(-230px);
    
    ${Button} {
      display: block;
    }
    
    ${props => props.show && show};
  }
`

LeftNavigationMobile.Button = Button
LeftNavigationMobile.Icon = Icon

export default LeftNavigationMobile
