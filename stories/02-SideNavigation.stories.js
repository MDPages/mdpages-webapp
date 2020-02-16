import React from 'react'
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
            <SideNavigationItem.Text>Home</SideNavigationItem.Text>
          </SideNavigationItem.StyledLink>
        </SideNavigationItem>
      </SideNavigation.List>
    </SideNavigation>
  </StoryStyle>
)
