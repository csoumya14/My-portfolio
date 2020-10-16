import React from 'react'
import styled from 'styled-components'
import country from '../Images/country-data.png'
import jobListing from '../Images/joblisting.png'
import projectTracking from '../Images/projectTracking.png'

const Container = styled.div`
  background-color: #fff;
  margin: 0;
  width: 100%;
  height: 100vh;
`

const Title = styled.h1`
  color: #2f4454;
  text-transform: uppercase;
  text-align: center;
  font-size: 40px;
  margin-top: 10px;
  font-weight: 800;
  @media only screen and (min-width: 421px) and (max-width: 767px) {
    font-size: 30px;
  }
  @media only screen and (max-width: 420px) {
    font-size: 30px;
  }
`
const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`

const ContentOverlay = styled.div`
  background-image: url(${jobListing});
  background-size:cover;
  position: absolute;
  height: 99%;
  width: 100%;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  opacity: 1;
  -webkit-transition: all 0.4s ease-in-out 0s;
  -moz-transition: all 0.4s ease-in-out 0s;
  transition: all 0.4s ease-in-out 0s;
  
}
`
const InheritedOverlay1 = styled(ContentOverlay)`
  background-image: url(${country});
`
const InheritedOverlay2 = styled(ContentOverlay)`
  background-image: url(${projectTracking});
`
const ContentDetails = styled.div`
  position: absolute;
  text-align: center;
  padding-left: 1em;
  padding-right: 1em;
  width: 100%;
  top: 50%;
  left: 50%;
  opacity: 0;
  font-size: 18px;
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  -webkit-transition: all 0.3s ease-in-out 0s;
  -moz-transition: all 0.3s ease-in-out 0s;
  transition: all 0.3s ease-in-out 0s;
  .heading {
    font-size: 30px;
    font-weight: 700;
    color: #2f4454;
  }
  .heading1 {
    margin-top: -25px;
    font-size: 18px;
    font-weight: 200;
    color: #ff1d58;
  }
  .para {
    color: #2f4454;
  }
  .externalLink {
    padding: 5px 20px;
    position: relative;
    color: #ff0028;
    text-decoration: none;
    &:after {
      content: '';
      height: 3px;
      position: absolute;
      bottom: 0;
      left: 20px;
      width: 0%;
      background: #ff0028;
      transition: 0.2s;
    }

    &:hover:after {
      width: 65%;
    }
  }
`
const Content = styled.div`
  position: relative;
  width: 90%;
  max-width: 400px;
  height: 400px;

  overflow: hidden;

  &:hover ${ContentOverlay} {
    opacity: 0;
  }
  &: hover ${ContentDetails} {
    top: 50%;
    left: 50%;
    opacity: 1;
  }
`

const Works = () => {
  return (
    <Container>
      <Title>Projects</Title>
      <ContentContainer>
        <Content>
          <ContentOverlay></ContentOverlay>
          <ContentDetails>
            <h3 className="heading">Job Listings</h3>
            <h6 className="heading1">React JS</h6>
            <p className="para">
              A job listing site demo that allows user to filter out jobs based on the categories
              selected.
            </p>
            <a className="externalLink" href="https://job-listing-challenge-sand.vercel.app/">
              View site
            </a>
            <a className="externalLink" href="https://github.com/csoumya14/JobListing.git">
              View code
            </a>
          </ContentDetails>
        </Content>
        <Content>
          <InheritedOverlay1></InheritedOverlay1>
          <ContentDetails>
            <h3 className="heading">Country Data Explorer</h3>
            <h6 className="heading1">React JS</h6>
            <p className="para">
              A web application that allows user to get information about various countries based on
              search parameters. REST Countries API is used as the information source{' '}
            </p>
            <a className="externalLink" href="https://csoumya14.github.io/countapi/">
              View site
            </a>
            <a className="externalLink" href="https://github.com/csoumya14/countapi.git">
              View code
            </a>
          </ContentDetails>
        </Content>
        <Content>
          <InheritedOverlay2></InheritedOverlay2>
          <ContentDetails>
            <h3 className="heading">Demo Website Homepage</h3>
            <h6 className="heading1">HTML/CSS/JavaScript</h6>
            <p className="para">A website design with some interesting layout</p>

            <a
              className="externalLink"
              href="https://project-tracking-intro-component-30ly4mov0.vercel.app/"
            >
              View site
            </a>
            <a
              className="externalLink"
              href="https://github.com/csoumya14/Project-tracking-intro-component.git"
            >
              View Code
            </a>
          </ContentDetails>
        </Content>
      </ContentContainer>
    </Container>
  )
}

export default Works
