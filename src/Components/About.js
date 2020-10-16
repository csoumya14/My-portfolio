import React from 'react'
import styled from 'styled-components'
import { CodeAlt } from '@styled-icons/boxicons-regular'
import { FileCode } from '@styled-icons/fa-regular/FileCode'
import { Devices } from '@styled-icons/boxicons-regular'
import SkillBar from './SkillBar'

const Container = styled.div`
  background-color: #fff;

  width: 100%;
`
const Title = styled.h1`
  color: #2f4454;
  text-transform: uppercase;
  text-align: center;
  font-size: 40px;
  margin-top: 20px;
  font-weight: 800;
  @media only screen and (min-width: 421px) and (max-width: 767px) {
    font-size: 30px;
  }
  @media only screen and (max-width: 420px) {
    font-size: 30px;
  }
`
const Strengths = styled.div`
  margin-top: 60px;

  display: flex;
  flex-direction: row;

  justify-content: space-evenly;
  @media only screen and (min-width: 421px) and (max-width: 767px) {
    flex-wrap: wrap;
  }
  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    flex-wrap: wrap;
  }
  @media only screen and (max-width: 420px) {
    flex-wrap: wrap;
  }
`
const CodeIcon = styled(CodeAlt)`
  color: #2f4454;
  width: 60px;
  position: absolute;
  margin-top: 15px;
  align-items: center;
  margin-left: 20px;
`
const FileIcon = styled(FileCode)`
  color: #2f4454;
  width: 40px;
  align-items: center;
  position: absolute;
  margin-top: 17px;
  z-index: 1;
  margin-left: 32px;
`
const DeviceIcon = styled(Devices)`
  color: #2f4454;
  width: 60px;
  align-items: center;
  position: absolute;
  margin-top: 17px;
  z-index: 1;
  margin-left: 18px;
`
const StrengthDiv = styled.div`
  width: 50%;

  padding-left: 180px;

  @media only screen and (min-width: 1024px) and (max-width: 1365px) {
    padding-left: 110px;
  }
  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    padding-left: 145px;
  }
  @media only screen and (min-width: 421px) and (max-width: 767px) {
    padding-left: 80px;
  }
  @media only screen and (max-width: 420px) {
    padding-left: 50px;
  }
`

const Words1 = styled.div`
  .heading1 {
    margin-top: 50px;
    margin-left: 1px;
  }
  .para1 {
    margin-left: -70px;
    width: 80%;
    text-align: center;
  }
  @media only screen and (min-width: 1024px) and (max-width: 1365px) {
    .para1 {
      margin-left: 0px;
      text-align: left;
    }
  }
  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    .para1 {
      margin-left: 0px;
      text-align: left;
    }
  }
  @media only screen and (min-width: 421px) and (max-width: 767px) {
    .para1 {
      margin-left: 1px;
      text-align: left;
    }
  }
  @media only screen and (max-width: 420px) {
    .heading1 {
      margin-left: 5px;
    }
    .para1 {
      margin-left: 1px;
      text-align: left;
    }
  }
`
const Words2 = styled.div`
  .heading2 {
    margin-left: -19px;
    margin-top: 50px;
  }
  .para2 {
    margin-left: -60px;
    width: 80%;
    text-align: center;
  }
  @media only screen and (min-width: 1024px) and (max-width: 1365px) {
    .para2 {
      margin-left: -15px;
      text-align: left;
    }
  }
  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    .para2 {
      margin-left: -12px;
      text-align: left;
    }
  }
  @media only screen and (min-width: 421px) and (max-width: 767px) {
    .para2 {
      margin-left: 1px;
      text-align: left;
    }
  }
  @media only screen and (max-width: 420px) {
    .para2 {
      margin-left: -5px;
      text-align: left;
    }
  }
`
const Words3 = styled.div`
  .heading3 {
    margin-left: 5px;
    margin-top: 50px;
  }
  .para3 {
    margin-left: -60px;
    width: 80%;
    text-align: center;
  }
  @media only screen and (min-width: 1024px) and (max-width: 1365px) {
    .para3 {
      margin-left: -5px;
      text-align: left;
    }
  }
  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    .para3 {
      margin-left: 0px;
      text-align: left;
    }
  }
  @media only screen and (min-width: 421px) and (max-width: 767px) {
    .para3 {
      margin-left: 1px;
      text-align: left;
    }
  }
  @media only screen and (max-width: 420px) {
    .heading3 {
      margin-right: 0px;
    }
    .para3 {
      margin-left: 0px;
      text-align: left;
    }
  }
`

const AboutSkill = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 18px;
  margin-top: 50px;
  justify-content: space-around;
  @media only screen and (min-width: 421px) and (max-width: 767px) {
    flex-direction: column;
    justify-content: center;
    margin-top: 30px;
    font-size: 16px;
  }
  @media only screen and (max-width: 420px) {
    flex-direction: column;
    justify-content: center;
    margin-top: 30px;
    font-size: 16px;
  }
`
const AboutMe = styled.div`
  width: 500px;
  .paraAbout {
    color: #2f4454;

    margin-left: 50px;
  }
  @media only screen and (max-width: 420px) {
    width: 100%;
    .paraAbout {
      color: #2f4454;
    }
  }
`
const Skill = styled.div`
  width: 500px;
  @media only screen and (max-width: 420px) {
    width: 100%;
  }
`

const Badge = styled.div`
  position: relative;
  background: #e7717d;
  height: 100px;
  width: 100px;
  
  border-radius: 50px;
 
  &:before,
  &:after {
    content: '';
    position: absolute;
    border-bottom: 70px solid #e7717d;
    border-left: 40px solid transparent;
    border-right: 40px solid transparent;
    top: 70px;
    left: -10px;
    transform: rotate(-140deg);
  }
  &:after {
    left: auto;
    right: -10px;
    transform: rotate(140deg);
    .animationSpan{
      animation: move 2s linear infinite;
}
    }
  }
  
`

const About = () => {
  return (
    <Container>
      <Title>About Me</Title>
      <Strengths>
        <StrengthDiv>
          <Badge>
            <CodeIcon />
          </Badge>
          <Words1>
            <h3 className="heading1">Clean Code</h3>
            <p className="para1">I focus on writing cleaner codes with codebase clarity</p>
          </Words1>
        </StrengthDiv>
        <StrengthDiv>
          <Badge>
            <FileIcon />
          </Badge>
          <Words2>
            <h3 className="heading2">Modern Syntaxes</h3>
            <p className="para2">
              Passionate about learning modern syntaxes and try to incorporate them in projects
            </p>
          </Words2>
        </StrengthDiv>
        <StrengthDiv>
          <Badge>
            <DeviceIcon />
          </Badge>
          <Words3>
            <h3 className="heading3">Responsive</h3>
            <p className="para3">I make sure the layout works on both big and small screen sizes</p>
          </Words3>
        </StrengthDiv>
      </Strengths>

      <AboutSkill>
        <AboutMe>
          <p className="paraAbout">
            I am a self taught developer born and bought up in India. Currently, I live in Norway
            along with my husband and daughter.
          </p>
          <p className="paraAbout">
            I pursued my master's degree in Science(Physics and Technology) from India. I developed
            an interest in programming during my studies at University of Oslo . I find front end
            development an interesting medium where I can collaborate with my creative mindset and
            technology .
          </p>
          <p className="paraAbout">
            {' '}
            I am interested to work on ambitious projects along with positive people thereby improve
            and contribute my knowledge for something genuine and useful.
          </p>
        </AboutMe>
        <Skill>
          <SkillBar />
        </Skill>
      </AboutSkill>
    </Container>
  )
}

export default About
