import styled from 'styled-components'
import StyledText from './StyledText'
import Icon from './Icon'

const LoginButton = styled.div`
    font-family: 'Lato', sans-serif;
    font-size: 15px;
    color: white;
    background-color: #4465a3;
    cursor: pointer;
    padding: 8px;
    border-radius: 3px;
    border: 3px solid #4465a3;
    transition: 300ms all;
    
    &:hover, &:active {
      background-color: #3d5a91;
      border-color: #3d5a91;
    }
    
    &:active {
      transform: translateY(1px);
    }
`
LoginButton.StyledText = StyledText
LoginButton.Icon = Icon

export default LoginButton
