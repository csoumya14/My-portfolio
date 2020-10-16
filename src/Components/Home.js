import React from 'react'
import styled, { keyframes } from 'styled-components'

const Context = styled.div`
  width: 900px;
  position: relative;
  margin: 0 auto;
  text-align: center;
  @media only screen and (min-width: 1024px) and (max-width: 1365px) {
    width: 80%;
  }
  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    width: 80%;
  }
  @media only screen and (min-width: 421px) and (max-width: 767px) {
    width: 100%;
    font-size: 8vw;
  }
  @media only screen and (max-width: 420px) {
    width: 80%;
  }
`
const Container = styled.div`
  background-color: #1a1a1d;
  position: absolute;
  height: 100vh;
  width: 100%;
`
const Area = styled.div`
  height: 150px;
  overflow: hidden;
`
const Title = styled.p`
  font-size: 70px;
  color: #fff;
  width: 100%;
  text-align: center;
  @media only screen and (min-width: 1024px) and (max-width: 1365px) {
    font-size: 6vw;
  }
  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    font-size: 6vw;
  }

  @media only screen and (min-width: 421px) and (max-width: 767px) {
    color: green;
    font-size: 8vw;
  }

  @media only screen and (max-width: 420px) {
    font-size: 6vw;
  }
`
const SpanString = styled.span`
  color: #ee4c7c;
`
const animate = keyframes`
0%{
  transform: translateY(0) rotate(0deg);
  opacity: 1;
  border-radius: 0;
}
80%{
  transform: translateY(-890px) rotate(720deg);
  opacity: 0.5;
  border-radius: 50%;
}

100%{
  transform: translateY(-1000px) rotate(720deg);
  opacity: 0;
  border-radius: 50%;
}

`
const Links = styled.li`
  position: absolute;
  display: block;
  list-style: none;
  width: 20px;
  height: 20px;
  background: #c3073f;
  animation: ${animate} 25s linear infinite;
  bottom: -150px;
`

const Circles = styled.ul`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  @media only screen and (max-width: 420px) {
  }
  ${Links}:nth-child(1) {
    left: 25%;
    width: 80px;
    height: 80px;
    animation-delay: 0s;
    @media only screen and (max-width: 420px) {
      width: 30px;
      height: 30px;
    }
  }
  ${Links}:nth-child(2) {
    left: 10%;
    width: 20px;
    height: 20px;
    animation-delay: 2s;
    animation-duration: 12s;
    @media only screen and (max-width: 420px) {
      width: 20px;
      height: 20px;
    }
  }

  ${Links}:nth-child(3) {
    left: 70%;
    width: 20px;
    height: 20px;
    animation-delay: 4s;
    @media only screen and (max-width: 420px) {
      width: 20px;
      height: 20px;
    }
  }

  ${Links}:nth-child(4) {
    left: 40%;
    width: 60px;
    height: 60px;
    animation-delay: 0s;
    animation-duration: 18s;
    @media only screen and (max-width: 420px) {
      width: 40px;
      height: 40px;
    }
  }

  ${Links}:nth-child(5) {
    left: 65%;
    width: 20px;
    height: 20px;
    animation-delay: 0s;
    @media only screen and (max-width: 420px) {
    }
  }

  ${Links}:nth-child(6) {
    left: 75%;
    width: 110px;
    height: 110px;
    animation-delay: 3s;
    @media only screen and (max-width: 420px) {
      width: 50px;
      height: 50px;
    }
  }

  ${Links}:nth-child(7) {
    left: 35%;
    width: 150px;
    height: 150px;
    animation-delay: 7s;
    @media only screen and (max-width: 420px) {
      width: 60px;
      height: 60px;
    }
  }

  ${Links}:nth-child(8) {
    left: 50%;
    width: 25px;
    height: 25px;
    animation-delay: 15s;
    animation-duration: 45s;
    @media only screen and (max-width: 420px) {
      width: 20px;
      height: 20px;
    }
  }

  ${Links}:nth-child(9) {
    left: 20%;
    width: 15px;
    height: 15px;
    animation-delay: 2s;
    animation-duration: 35s;
    @media only screen and (max-width: 420px) {
      width: 20px;
      height: 20px;
    }
  }

  ${Links}:nth-child(10) {
    left: 85%;
    width: 150px;
    height: 150px;
    @media only screen and (max-width: 420px) {
      width: 60px;
      height: 60px;
    }
    animation-delay: 0s;
    animation-duration: 11s;
  }
`

const Home = () => {
  return (
    <Container>
      <Area>
        <Circles>
          <Links></Links>
          <Links></Links>
          <Links></Links>
          <Links></Links>
          <Links></Links>
          <Links></Links>
          <Links></Links>
          <Links></Links>
          <Links></Links>
          <Links></Links>
        </Circles>
      </Area>
      <Context>
        <Title>
          Hello, I'm <SpanString>Soumya Chalakkal</SpanString>. I'm a front-end developer.
        </Title>
      </Context>
    </Container>
  )
}

export default Home
