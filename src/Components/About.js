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
  justify-content: center;
  @media only screen and (min-width: 421px) and (max-width: 767px) {
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
  display: flex;
  flex-direction:column
  align_items:center;
  justify-content:center;
 
  .heading {
    margin-top: 140px;
    margin-left: 0px;
    position: absolute;
  }
  .para {
    margin-left: 0px;
    margin-top: 170px;
    width:50%;
    text-align:center;  
  }
  
  
  @media only screen and (min-width: 421px) and (max-width: 767px) {
    
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
  position: absolute;
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
          <h3 className="heading">Clean Code</h3>
          <p className="para">I focus on writing cleaner codes with codebase clarity</p>
        </StrengthDiv>
        <StrengthDiv>
          <Badge>
            <FileIcon />
          </Badge>
          <h3 className="heading">Modern Syntaxes</h3>
          <p className="para">
            Passionate about learning modern syntaxes and try to incorporate them in projects
          </p>
        </StrengthDiv>
        <StrengthDiv>
          <Badge>
            <DeviceIcon />
          </Badge>
          <h3 className="heading">Responsive</h3>
          <p className="para">I make sure the layout works on both big and small screen sizes</p>
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
