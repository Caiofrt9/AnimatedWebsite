import React from 'react'
import styled from 'styled-components'
import Navigation from './Navigation'
import SmallHeading from './SmallHeading'

import CtaButton from './CtaButton'

function MainContent() {
  return (
    <MainContentStyled>
      <Navigation />
      <div className="hero">
        <div className="hero-text">Hi, I am Caio Fernando</div>
        <div className="subtitle">
          <SmallHeading title={'Front End Developer'} identifier={'Before'} />
        </div>

        <div className="icons"></div>
      </div>
    </MainContentStyled>
  )
}

const MainContentStyled = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 80%;
  height: 100%;

  .hero {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 2rem;
    .hero-text {
      display: flex;
      font-size: 50px;
    }
  }

  .subtitle {
    align-items: center;
  }
  .content {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    height: 100%;
    width: 100%;
    .btns-con {
      margin-top: 2rem;
    }
    .left {
      display: flex;
      justify-content: center;
      flex-direction: column;
      h1 {
        padding: 1rem 0;
        font-size: 5rem;
      }
      .btns-con {
        margin-top: 3rem;
      }
    }
    /* .right {
      img {
        position: absolute;
        right: -11%;
        bottom: -1%;
        width: 60%;
      }
    } */
  }
`
export default MainContent
