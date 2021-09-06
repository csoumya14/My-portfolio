import React from 'react';
import styled from 'styled-components';
import todo from '../Images/TodoApp.png';
import photoSnap from '../Images/photosnap.png';
import clockApp from '../Images/clockApp.png';
import easybank from '../Images/easybank.png';

const Container = styled.div`
  background-color: #fff;
  margin: 0;
  width: 100%;
  height: 100vh;
`;

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
`;
const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

const ContentOverlay = styled.div`
  background-image: url(${photoSnap});
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
`;
const InheritedOverlay1 = styled(ContentOverlay)`
  background-image: url(${easybank});
`;
const InheritedOverlay2 = styled(ContentOverlay)`
  background-image: url(${clockApp});
`;
const InheritedOverlay3 = styled(ContentOverlay)`
  background-image: url(${todo});
`;
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
`;
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
`;

const Works = () => {
  return (
    <Container>
      <Title>Projects</Title>
      <ContentContainer>
        <Content>
          <ContentOverlay></ContentOverlay>
          <ContentDetails>
            <h3 className="heading">Photosnap App</h3>
            <h6 className="heading1">React JS/Styled Components</h6>
            <p className="para">
              A multipage website modeling the marketing site for a photo-sharing app
            </p>
            <a className="externalLink" href="https://photosnap-deploy.vercel.app">
              View site
            </a>
            <a className="externalLink" href="https://github.com/csoumya14/photosnap.git">
              View code
            </a>
          </ContentDetails>
        </Content>
        <Content>
          <InheritedOverlay1></InheritedOverlay1>
          <ContentDetails>
            <h3 className="heading">Demo Landing Page</h3>
            <h6 className="heading1">React JS</h6>
            <p className="para">A landing page with interesting layouts</p>
            <a className="externalLink" href="https://easybank-challenge-six.vercel.app/">
              View site
            </a>
            <a className="externalLink" href="https://github.com/csoumya14/easybank-challenge.git">
              View code
            </a>
          </ContentDetails>
        </Content>
        <Content>
          <InheritedOverlay2></InheritedOverlay2>
          <ContentDetails>
            <h3 className="heading">Clock App</h3>
            <h6 className="heading1">ReactJS/Styled components</h6>
            <p className="para">A clock app that shows the time and location of the visitor</p>

            <a className="externalLink" href="https://clock-app-nu.vercel.app/">
              View site
            </a>
            <a className="externalLink" href="https://github.com/csoumya14/Clock-app.git">
              View Code
            </a>
          </ContentDetails>
        </Content>
        <Content>
          <InheritedOverlay3></InheritedOverlay3>
          <ContentDetails>
            <h3 className="heading">Todo App</h3>
            <h6 className="heading1">React JS/Styled Components</h6>
            <p className="para">A todo app that allows user to add and edit todo activities</p>
            <a className="externalLink" href="https://todo-app-final.vercel.app/">
              View site
            </a>
            <a className="externalLink" href="https://github.com/csoumya14/Todo-app-final.git">
              View code
            </a>
          </ContentDetails>
        </Content>
      </ContentContainer>
    </Container>
  );
};

export default Works;
