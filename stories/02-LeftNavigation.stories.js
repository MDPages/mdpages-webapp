import React, { useState } from 'react'
import styled from 'styled-components'
import LeftNavigation from '../src/components/blocks/LeftNavigation'
import LeftNavigationItem from '../src/components/blocks/LeftNavigationItem'
import { faFlag } from '@fortawesome/free-regular-svg-icons'

export default {
  title: 'LeftNavigation',
  component: LeftNavigation
}

const StoryStyle = styled.div`
  min-height: 100vh;
`

const LeftNavigationItemContainer = styled.div`
  width: 400px;
`

export const LeftNavigationItemStory = () => (
  <StoryStyle>
    <LeftNavigationItemContainer>
      <LeftNavigationItem>
        <LeftNavigationItem.StyledLink>
          <LeftNavigationItem.Icon icon={faFlag} />
          <LeftNavigationItem.Text>Home</LeftNavigationItem.Text>
        </LeftNavigationItem.StyledLink>
      </LeftNavigationItem>
    </LeftNavigationItemContainer>
  </StoryStyle>
)

const Div = styled.div``

export const LeftNavigationDropdownStory = () => {
  const Dropdown = () => {
    const [show, setShow] = useState(false)
    return (
      <LeftNavigationItem>
        <LeftNavigationItem.StyledLink as={Div} onClick={() => setShow(!show)}>
          <LeftNavigationItem.Icon icon={faFlag} />
          <LeftNavigationItem.Text>Dropdown</LeftNavigationItem.Text>
        </LeftNavigationItem.StyledLink>
        <LeftNavigationItem.Dropdown show={show} length={2}>
          <LeftNavigationItem>
            <LeftNavigationItem.StyledLink>
              <LeftNavigationItem.Icon icon={faFlag} />
              <LeftNavigationItem.Text>Home</LeftNavigationItem.Text>
            </LeftNavigationItem.StyledLink>
          </LeftNavigationItem>
          <LeftNavigationItem>
            <LeftNavigationItem.StyledLink>
              <LeftNavigationItem.Icon icon={faFlag} />
              <LeftNavigationItem.Text>Home</LeftNavigationItem.Text>
            </LeftNavigationItem.StyledLink>
          </LeftNavigationItem>
        </LeftNavigationItem.Dropdown>
      </LeftNavigationItem>
    )
  }
  return (
    <StoryStyle>
      <LeftNavigation>
        <LeftNavigation.List>
          <Dropdown />
          <Dropdown />
          <Dropdown />
        </LeftNavigation.List>
      </LeftNavigation>
    </StoryStyle>
  )
}

export const LeftNavigationItemsStory = () => (
  <StoryStyle>
    <LeftNavigation>
      <LeftNavigation.Image />
      <LeftNavigation.List>
        <LeftNavigationItem>
          <LeftNavigationItem.StyledLink>
            <LeftNavigationItem.Icon icon={faFlag} />
            <LeftNavigationItem.Text>Home</LeftNavigationItem.Text>
          </LeftNavigationItem.StyledLink>
        </LeftNavigationItem>
        <LeftNavigationItem>
          <LeftNavigationItem.StyledLink>
            <LeftNavigationItem.Icon icon={faFlag} />
            <LeftNavigationItem.Text>Home</LeftNavigationItem.Text>
          </LeftNavigationItem.StyledLink>
        </LeftNavigationItem>
        <LeftNavigationItem>
          <LeftNavigationItem.StyledLink>
            <LeftNavigationItem.Icon icon={faFlag} />
            <LeftNavigationItem.Text>Homeeeeeeeeeeeeeeeeeeeeee</LeftNavigationItem.Text>
          </LeftNavigationItem.StyledLink>
        </LeftNavigationItem>
        <LeftNavigationItem>
          <LeftNavigationItem.StyledLink>
            <LeftNavigationItem.Icon icon={faFlag} />
            <LeftNavigationItem.Text>Dropdown</LeftNavigationItem.Text>
          </LeftNavigationItem.StyledLink>
        </LeftNavigationItem>
      </LeftNavigation.List>
    </LeftNavigation>
  </StoryStyle>
)
