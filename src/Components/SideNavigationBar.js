import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Menu } from '@styled-icons/boxicons-regular'

const Header = styled.div`
  width: 100%;
  display: grid;
  background-color: #1a1a1d;
  grid-template-areas: 'nav logo';
  @media only screen and (min-width: 1024px) and (max-width: 1365px) {
    border-bottom: 1px solid #1a1a1d;
  }
  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    border-bottom: 1px solid #1a1a1d;
  }

  @media only screen and (max-width: 420px) {
    grid-template-areas: 'logo-burger  nav';
  }
`

const StyledLink = styled(Link)`
  display: inline-block;
  padding: 15px;
  text-decoration: none;
  color: #aaa;
  font-weight: 800;
  font-size: 20px;
  text-transform: uppercase;
  margin: 0 10px;
  cursor: pointer;
  @media only screen and (min-width: 421px) and (max-width: 767px) {
    font-size: 14px;
  }
  @media only screen and (max-width: 420px) {
    font-size: 14px;
  }
`
const Burger = styled(Menu)`
  width: 50px;
  color: red;
  display: none;
  @media only screen and (max-width: 420px) {
    display: block;
  }
`

const Nav = styled.div`
  width: 100%;
  margin-left: 150px;
  grid-area: nav;
  display: grid;
  grid-template-columns: repeat(4, auto);
  align-items: center;
  justify-items: center;
  padding: 50px 0;
  background-color: #1a1a1d;
  @media only screen and (min-width: 1024px) and (max-width: 1365px) {
    margin-left: 76px;
  }
  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    margin-left: 26px;
  }
  @media only screen and (min-width: 421px) and (max-width: 767px) {
    margin-left: 6px;
  }
  @media only screen and (max-width: 420px) {
    margin-left: -80px;
    grid-template-rows: repeat(4, auto);
    grid-template-columns: none;
    grig-row-gap: 20px;
  }

  ${StyledLink} {
    position: relative;

    z-index: 1;
    &:hover {
      color: #fff;
      transition: all 0.5s;
    }
    &:after {
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      margin: auto;

      height: 1px;
      content: '.';
      color: transparent;
      background: #e3afbc;
      visibility: none;
      opacity: 0;
      z-index: -1;
      transition: all 0.5s;
    }
    &:before {
      transition: all 0.5s;
    }
    &:hover::after {
      opacity: 1;
      visibility: visible;
      height: 100%;
    }
  }
`

const SideBar = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false)
  const [isNavVisible, setIsNavVisible] = useState(true)
  const toggleNav = () => {
    setIsNavVisible(!isNavVisible)
  }

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width:420px)')
    mediaQuery.addListener(handleMediaQueryChange)
    handleMediaQueryChange(mediaQuery)

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange)
    }
  }, [])

  const handleMediaQueryChange = (mediaQuery) => {
    if (mediaQuery.matches) {
      setIsSmallScreen(true)
    } else {
      setIsSmallScreen(false)
    }
  }
  return (
    <Header>
      <Burger onClick={toggleNav} />

      {(!isSmallScreen || isNavVisible) && (
        <Nav>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/about" onClick={toggleNav}>
            About Me
          </StyledLink>
          <StyledLink to="/work" onClick={toggleNav}>
            My Work
          </StyledLink>
          <StyledLink to="/contact" onClick={toggleNav}>
            Contact Me
          </StyledLink>
        </Nav>
      )}
    </Header>
  )
}

export default SideBar
