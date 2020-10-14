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
`
const Strengths = styled.div`
  width: 100%;

  margin-top: 60px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
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
const StrengthWords = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 30px;
  color: #2f4454;
  font-size: 18px;
  justify-content: space-around;
`
const Words1 = styled.div`
  width: 30%;
  text-align: center;
  .heading1 {
    margin-left: 45px;
  }
  .para1 {
    width: 50%;
    margin-left: 130px;
  }
`
const Words2 = styled.div`
  width: 40%;
  text-align: center;
  .para2 {
    width: 50%;
    margin-left: 150px;
  }
`
const Words3 = styled.div`
  width: 30%;
  text-align: center;
  .heading3 {
    margin-right: 50px;
  }
  .para3 {
    width: 50%;
    margin-left: 90px;
  }
`

const AboutSkill = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 18px;
  margin-top: 50px;
  justify-content: space-around;
`
const AboutMe = styled.div`
  width: 500px;
  .paraAbout {
    color: #2f4454;

    margin-left: 50px;
  }
`
const Skill = styled.div`
  width: 500px;
`

const Badge = styled.div`
  position: relative;
  background: #e7717d;
  height: 100px;
  width: 100px;
  border-radius: 50px;
  display: flex;
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
        <Badge>
          <CodeIcon />
        </Badge>
        <Badge>
          <FileIcon />
        </Badge>
        <Badge>
          <DeviceIcon />
        </Badge>
      </Strengths>
      <StrengthWords>
        <Words1>
          <h3 className="heading1">Clean Code</h3>
          <p className="para1">I focus on writing cleaner codes with codebase clarity</p>
        </Words1>
        <Words2>
          <h3 className="heading2">Modern Syntaxes</h3>
          <p className="para2">
            Passionate about learning modern syntaxes and try to incorporate them in projects
          </p>
        </Words2>
        <Words3>
          <h3 className="heading3">Responsive</h3>
          <p className="para3">I make sure the layout works on both big and small screen sizes</p>
        </Words3>
      </StrengthWords>
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
