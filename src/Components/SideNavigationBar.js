import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

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
`

const Nav = styled.div`
  width: 100%;
  margin: 0 auto;
  background-color: #1a1a1d;
  text-align: center;
  padding: 50px 0;

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
      width: 100%;
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
  return (
    <div>
      <Nav>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/about">About Me</StyledLink>
        <StyledLink to="/work">My Work</StyledLink>
        <StyledLink to="/contact">Contact Me</StyledLink>
      </Nav>
    </div>
  )
}

export default SideBar
