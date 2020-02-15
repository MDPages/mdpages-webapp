import React from 'react'
import LoginPanel from '../src/components/blocks/LoginPanel'
import styled from 'styled-components'
import LoginInputField from '../src/components/blocks/LoginInputField'
import LoginButton from '../src/components/blocks/LoginButton'

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
export const LoginButtonStory = () => (
  <StoryStyle>
    <LoginInputFieldContainer>
      <LoginButton>
        <LoginButton.Icon />
        <LoginButton.StyledText>
        Log in with Facebook
        </LoginButton.StyledText>
      </LoginButton>
    </LoginInputFieldContainer>
  </StoryStyle>
)
