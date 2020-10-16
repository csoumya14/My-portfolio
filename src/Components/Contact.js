import React from 'react'
import styled from 'styled-components'
import ContactAnimation from './ContactAnimation'
import { Phone } from '@styled-icons/boxicons-regular'
import { Email } from '@styled-icons/material-twotone'
import { LinkedinSquare } from '@styled-icons/boxicons-logos'
import { Github } from '@styled-icons/boxicons-logos'
import { FacebookCircle } from '@styled-icons/boxicons-logos'
import { Twitter } from '@styled-icons/boxicons-logos'

const Container = styled.div`
  background-color: #e4decd;
  height: 90vh;
  width: 100%;
  position: absolute;

  .title {
    color: #2f4454;
    text-transform: uppercase;
    text-align: center;
    font-size: 40px;
    padding-top: 20px;
    font-weight: 800;
  }
  @media only screen and (min-width: 421px) and (max-width: 767px) {
    .title {
      font-size: 30px;
    }
  }
  @media only screen and (max-width: 420px) {
    .title {
      font-size: 30px;
    }
  }
`
const Card = styled.div`
  margin: auto;
  width: 40%;
  height: 400px;
  text-align: center;
  background-color: #c2b490;

  box-shadow: 3px 21px 21px 5px rgba(194, 180, 144, 0.73);
  @media only screen and (min-width: 1024px) and (max-width: 1365px) {
    width: 60%;
    margin-top: 150px;
  }
  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    margin-top: 100px;
    width: 60%;
  }
  @media only screen and (min-width: 421px) and (max-width: 767px) {
    margin-top: 50px;
    width: 60%;
  }
  @media only screen and (max-width: 420px) {
    width: 100%;
    margin-top: 50px;
    box-shadow: 0px 0px 0px 0px rgba(194, 180, 144, 0.73);
    border: 1px solid #5c5f58;
  }
`
const InfoContainer = styled.div`
  margin-top: 40px;
`
const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  .spanMail {
    font-size: 20px;
  }
`
const EmailIcon = styled(Email)`
  width: 25px;
  margin-right: 10px;
  color: #e0474c;
`
const PhoneIcon = styled(Phone)`
  width: 25px;
  margin-right: 2px;
  margin-top: -5px;
  color: #00303f;
`
const InterWeb = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 10px;
  margin-top: 20px;
  width: 100%;
  justify-content: center;
`
const LinkedIn = styled(LinkedinSquare)`
  width: 25px;
  margin-right: 12px;
  margin-top: -5px;
  color: #2867b2;
`
const GithubIcon = styled(Github)`
  width: 25px;
  margin-right: 12px;
  margin-top: -5px;
  color: #211f1f;
`
const FacebookIcon = styled(FacebookCircle)`
  width: 25px;
  margin-right: 12px;
  margin-top: -5px;
  color: #3b5998;
`
const TwitterIcon = styled(Twitter)`
  width: 25px;
  margin-right: 12px;
  margin-top: -5px;
  color: #00acee;
`

const Contact = () => {
  return (
    <Container>
      <h1 className="title">Contact Me</h1>
      <Card>
        <ContactAnimation />
        <InfoContainer>
          <Info>
            <p>
              <EmailIcon />
              <span className="spanMail">soumyachalakkal@gmail.com</span>
            </p>
            <p>
              <PhoneIcon /> <span className="spanMail">+4746880583</span>
            </p>
          </Info>
          <InterWeb>
            <a href="https://www.linkedin.com/in/soumya-chalakkal-60885246/">
              <LinkedIn />
            </a>
            <a href="https://github.com/csoumya14">
              <GithubIcon />
            </a>
            <a href="https://www.facebook.com/soumya.chalakkal/">
              <FacebookIcon />
            </a>
            <a href="https://twitter.com/Soumya_coder">
              <TwitterIcon />
            </a>
          </InterWeb>
        </InfoContainer>
      </Card>
    </Container>
  )
}

export default Contact
