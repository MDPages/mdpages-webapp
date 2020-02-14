import React from 'react'
import LoginPanel from '../src/components/blocks/LoginPanel'
import styled from 'styled-components'
import LoginInputField from '../src/components/blocks/LoginInputField'

export default {
  title: 'Login Panel',
  component: LoginPanel
}

const StoryStyle = styled.div`
  
`
const LoginInputFieldContainer = styled.div`
  padding: 15px;
  width: 250px;
`

export const LoginPanelStory = () => (
  <StoryStyle>
    <LoginPanel>
      <LoginPanel.StyledHeader>
        Login
      </LoginPanel.StyledHeader>
    </LoginPanel>
  </StoryStyle>
)
export const LoginInputFieldStory = () => (
  <StoryStyle>
    <LoginInputFieldContainer>
      <LoginInputField>
        <LoginInputField.StyledLabel for='username'>
        Username
        </LoginInputField.StyledLabel>
        <LoginInputField.StyledInput id='username' type='text' />
      </LoginInputField>
      <LoginInputField>
        <LoginInputField.StyledInput type='submit' value='Log in' />
      </LoginInputField>
    </LoginInputFieldContainer>
  </StoryStyle>
)
