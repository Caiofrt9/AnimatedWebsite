import React from 'react'
import styled from 'styled-components'

function Navigation() {
  return (
    <NavigationStyled>
      <h1>LOGO</h1>
      <ul className="nav-items">
        <li href="">Home</li>
        <li href="">About</li>
        <li href="">Portifolios</li>
        <li href="">Blogs</li>
        {/* <li href="">Contact</li> */}

        <div className="primary-btn">Contact</div>
      </ul>
    </NavigationStyled>
  )
}

const NavigationStyled = styled.nav`
  min-height: 10vh;
  display: flex;

  justify-content: space-between;
  align-items: center;
  .nav-items {
    display: flex;
    align-items: center;
    li {
      margin: 0 1rem;
    }
    .primary-btn {
      margin-left: 3rem;
      background-color: rgba(57, 95, 246, 0.6);
      padding: 0.6rem 0.8rem;
      border-radius: 70px;
      cursor: pointer;
      transition: all 0.4s ease-in-out;
      &:hover {
        background-color: rgba(57, 95, 246, 1);
      }
    }
  }
`

export default Navigation
