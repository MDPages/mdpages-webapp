import React, { useState } from 'react'
import styled from 'styled-components'
import LeftNavigation from '../src/components/blocks/LeftNavigation'
import LeftNavigationItem from '../src/components/blocks/LeftNavigationItem'
import { faFlag } from '@fortawesome/free-regular-svg-icons'
import { faBars, faSortDown } from '@fortawesome/free-solid-svg-icons'
import logo from '../src/assets/images/logo.png'
import LeftNavigationMobile from '../src/components/blocks/LeftNavigationMobile'

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

const DropdownHeader = styled.div`
  position: relative;
  z-index: 2;
  background-color: transparent;
`

export const LeftNavigationDropdownStory = () => {
  const Dropdown = () => {
    const [show, setShow] = useState(false)
    return (
      <LeftNavigationItem>
        <LeftNavigationItem.StyledLink as={DropdownHeader} onClick={() => setShow(!show)}>
          <LeftNavigationItem.Icon icon={faFlag} />
          <LeftNavigationItem.Text>Dropdown</LeftNavigationItem.Text>
        </LeftNavigationItem.StyledLink>
        <LeftNavigationItem.Dropdown show={show} length={2}>
          <LeftNavigationItem.Arrow icon={faSortDown} />
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

export const LeftNavigationManyItemsStory = () => {
  // Single hook, because its only an example of responsive ui
  const [show, setShow] = useState(false)
  return (
    <StoryStyle>
      <LeftNavigation>
        <LeftNavigation.LogoWrapper>
          <LeftNavigation.StyledLink href='#'>
            <LeftNavigation.Image src={logo} alt='logo' />
          </LeftNavigation.StyledLink>
        </LeftNavigation.LogoWrapper>
        <LeftNavigation.List>
          <LeftNavigationItem>
            <LeftNavigationItem.StyledLink href='#'>
              <LeftNavigationItem.Icon icon={faFlag} />
              <LeftNavigationItem.Text>Home</LeftNavigationItem.Text>
            </LeftNavigationItem.StyledLink>
          </LeftNavigationItem>
          <LeftNavigationItem>
            <LeftNavigationItem.StyledLink as={DropdownHeader} onClick={() => setShow(!show)}>
              <LeftNavigationItem.Icon icon={faFlag} />
              <LeftNavigationItem.Text>Dropdown</LeftNavigationItem.Text>
            </LeftNavigationItem.StyledLink>
            <LeftNavigationItem.Dropdown show={show} length={2}>
              <LeftNavigationItem.Arrow icon={faSortDown} />
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
          <LeftNavigationItem>
            <LeftNavigationItem.StyledLink href='#'>
              <LeftNavigationItem.Icon icon={faFlag} />
              <LeftNavigationItem.Text>Home</LeftNavigationItem.Text>
            </LeftNavigationItem.StyledLink>
          </LeftNavigationItem>
          <LeftNavigationItem>
            <LeftNavigationItem.StyledLink as={DropdownHeader} onClick={() => setShow(!show)}>
              <LeftNavigationItem.Icon icon={faFlag} />
              <LeftNavigationItem.Text>Dropdown</LeftNavigationItem.Text>
            </LeftNavigationItem.StyledLink>
            <LeftNavigationItem.Dropdown show={show} length={2}>
              <LeftNavigationItem.Arrow icon={faSortDown} />
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
          <LeftNavigationItem>
            <LeftNavigationItem.StyledLink href='#'>
              <LeftNavigationItem.Icon icon={faFlag} />
              <LeftNavigationItem.Text>Home</LeftNavigationItem.Text>
            </LeftNavigationItem.StyledLink>
          </LeftNavigationItem>
          <LeftNavigationItem>
            <LeftNavigationItem.StyledLink as={DropdownHeader} onClick={() => setShow(!show)}>
              <LeftNavigationItem.Icon icon={faFlag} />
              <LeftNavigationItem.Text>Dropdown</LeftNavigationItem.Text>
            </LeftNavigationItem.StyledLink>
            <LeftNavigationItem.Dropdown show={show} length={2}>
              <LeftNavigationItem.Arrow icon={faSortDown} />
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
          <LeftNavigationItem>
            <LeftNavigationItem.StyledLink href='#'>
              <LeftNavigationItem.Icon icon={faFlag} />
              <LeftNavigationItem.Text>Home</LeftNavigationItem.Text>
            </LeftNavigationItem.StyledLink>
          </LeftNavigationItem>
          <LeftNavigationItem>
            <LeftNavigationItem.StyledLink as={DropdownHeader} onClick={() => setShow(!show)}>
              <LeftNavigationItem.Icon icon={faFlag} />
              <LeftNavigationItem.Text>Dropdown</LeftNavigationItem.Text>
            </LeftNavigationItem.StyledLink>
            <LeftNavigationItem.Dropdown show={show} length={2}>
              <LeftNavigationItem.Arrow icon={faSortDown} />
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
}

export const LeftNavigationMobileStory = () => {
  const [show, setShow] = useState(false)
  return (
    <StoryStyle>
      <LeftNavigationMobile show={show}>
        <LeftNavigationMobile.Button onClick={() => setShow(!show)}>
          <LeftNavigationMobile.Icon icon={faBars} />
        </LeftNavigationMobile.Button>
        <LeftNavigation>
          <LeftNavigation.LogoWrapper>
            <LeftNavigation.StyledLink href='#'>
              <LeftNavigation.Image src={logo} alt='logo' />
            </LeftNavigation.StyledLink>
          </LeftNavigation.LogoWrapper>
          <LeftNavigation.List>
            <LeftNavigationItem>
              <LeftNavigationItem.StyledLink href='#'>
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
      </LeftNavigationMobile>
    </StoryStyle>
  )
}
