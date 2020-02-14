import styled from 'styled-components'
import StyledLabel from './StyledLabel'
import StyledInput from './StyledInput'

const LoginInputField = styled.div`
  display: flex;
  flex-direction: column;
`

LoginInputField.StyledLabel = StyledLabel
LoginInputField.StyledInput = StyledInput

export default LoginInputField
