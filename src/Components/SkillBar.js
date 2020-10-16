import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const SkillsData = [
  {
    type: 'HTML',
    level: 80,
  },
  {
    type: 'CSS',
    level: 90,
  },
  {
    type: 'JavaScript',
    level: 60,
  },
  {
    type: 'React.js',
    level: 60,
  },
  {
    type: 'Node.js',
    level: 30,
  },
]
const Container = styled.div`
  margin: auto;
`
const Skills = styled.ul`
  margin: 0 0 30px 0;
  padding: 0;
  width: calc(100% - 10px);
  @media only screen and (min-width: 421px) and (max-width: 767px) {
    margin: 10px 10px 30px 15px;
  }
  @media only screen and (max-width: 420px) {
    margin: 10px 10px 30px 0px;
  }
  .Link {
    display: block;
    position: relative;
    background: #5cdb95;
    color: #2f4454;
    height:30px;
    margin: 20px ;
    transition: width 300ms ease-in-out;
    .collapsed & {
      width: 0 !important;
    }
    .Para {
      display:flex;
      padding-top:5px;
      padding-left:5px;
      flex-direction:row;
      justify-content:space-between;
      margin: 0;
      font-weight: 400;
    }
    .SpanSkill{̇
      margin-left:160px;
      display:inline-block;
      right:0px;
     
      width:40px;
      
      font-weight: normal;
      color: #2f4454;
      font-size:inherit;
    }
  }
`

const SkillBar = () => {
  const [collapsed, setCollapsed] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setCollapsed(false)
    }, 1000)
    // code to run on component mount
  }, [])
  return (
    <Container collapsed={collapsed} className={`container ${collapsed ? 'collapsed' : ''}`}>
      <Skills>
        {SkillsData.map((skill, index) => (
          <li
            className="Link"
            key={skill.type}
            style={{
              width: `${skill.level}%`,
            }}
          >
            <p className="Para">
              <span className="SpanType">{skill.type}</span>
              <span className="SpanSkill">{skill.level}%</span>
            </p>
          </li>
        ))}
      </Skills>
    </Container>
  )
}

export default SkillBar
