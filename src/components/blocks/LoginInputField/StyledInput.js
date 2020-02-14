import styled from 'styled-components'

const StyledInput = styled.input`
  font-family: 'Lato', sans-serif;
  &[type=text], &[type=password], &[type=email]  {
    padding: 10px;
    border-radius: 3px;
    border: 3px solid #d5d7de;
    background-color: #d5d7de;
    transition: 300ms all;
    
    &:hover, &:active {
      background-color: #eef0f7;
    }
  }
  
  &[type=submit] {
    background-color: #47cf73;
    cursor: pointer;
    padding: 8px;
    border-radius: 3px;
    border: 3px solid #47cf73;
    
    &:hover &:active {
      background-color: #47c569;
      border-color: #47c569;
    }
    
    &:active {
      transform: translateY(1px);
    }
  }
  
  &:focus {
    outline: none;
  }
  
`

export default StyledInput
