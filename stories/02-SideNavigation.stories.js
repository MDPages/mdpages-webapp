import React, { useState } from 'react'
import styled from 'styled-components'
import SideNavigation from '../src/components/blocks/SideNavigation'
import SideNavigationItem from '../src/components/blocks/SideNavigationItem'
import { faFlag } from '@fortawesome/free-regular-svg-icons'

export default {
  title: 'SideNavigation',
  component: SideNavigation
}

const StoryStyle = styled.div`
  min-height: 100vh;
`

const SideNavigationItemContainer = styled.div`
  width: 400px;
`

export const SideNavigationItemStory = () => (
  <StoryStyle>
    <SideNavigationItemContainer>
      <SideNavigationItem>
        <SideNavigationItem.StyledLink>
          <SideNavigationItem.Icon icon={faFlag} />
          <SideNavigationItem.Text>Home</SideNavigationItem.Text>
        </SideNavigationItem.StyledLink>
      </SideNavigationItem>
    </SideNavigationItemContainer>
  </StoryStyle>
)

const Div = styled.div``

export const SideNavigationDropdownStory = () => {
  const Dropdown = () => {
    const [show, setShow] = useState(false)
    return (
      <SideNavigationItem>
        <SideNavigationItem.StyledLink as={Div} onClick={() => setShow(!show)}>
          <SideNavigationItem.Icon icon={faFlag} />
          <SideNavigationItem.Text>Dropdown</SideNavigationItem.Text>
        </SideNavigationItem.StyledLink>
        <SideNavigationItem.Dropdown show={show} length={2}>
          <SideNavigationItem>
            <SideNavigationItem.StyledLink>
              <SideNavigationItem.Icon icon={faFlag} />
              <SideNavigationItem.Text>Home</SideNavigationItem.Text>
            </SideNavigationItem.StyledLink>
          </SideNavigationItem>
          <SideNavigationItem>
            <SideNavigationItem.StyledLink>
              <SideNavigationItem.Icon icon={faFlag} />
              <SideNavigationItem.Text>Home</SideNavigationItem.Text>
            </SideNavigationItem.StyledLink>
          </SideNavigationItem>
        </SideNavigationItem.Dropdown>
      </SideNavigationItem>
    )
  }
  return (
    <StoryStyle>
      <SideNavigation>
        <SideNavigation.List>
          <Dropdown />
          <Dropdown />
          <Dropdown />
        </SideNavigation.List>
      </SideNavigation>
    </StoryStyle>
  )
}

export const SideNavigationItemsStory = () => (
  <StoryStyle>
    <SideNavigation>
      <SideNavigation.Image />
      <SideNavigation.List>
        <SideNavigationItem>
          <SideNavigationItem.StyledLink>
            <SideNavigationItem.Icon icon={faFlag} />
            <SideNavigationItem.Text>Home</SideNavigationItem.Text>
          </SideNavigationItem.StyledLink>
        </SideNavigationItem>
        <SideNavigationItem>
          <SideNavigationItem.StyledLink>
            <SideNavigationItem.Icon icon={faFlag} />
            <SideNavigationItem.Text>Home</SideNavigationItem.Text>
          </SideNavigationItem.StyledLink>
        </SideNavigationItem>
        <SideNavigationItem>
          <SideNavigationItem.StyledLink>
            <SideNavigationItem.Icon icon={faFlag} />
            <SideNavigationItem.Text>Homeeeeeeeeeeeeeeeeeeeeee</SideNavigationItem.Text>
          </SideNavigationItem.StyledLink>
        </SideNavigationItem>
        <SideNavigationItem>
          <SideNavigationItem.StyledLink>
            <SideNavigationItem.Icon icon={faFlag} />
            <SideNavigationItem.Text>Dropdown</SideNavigationItem.Text>
          </SideNavigationItem.StyledLink>
        </SideNavigationItem>
      </SideNavigation.List>
    </SideNavigation>
  </StoryStyle>
)
