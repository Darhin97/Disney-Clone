import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <Nav>
      <Logo src="/images/logo.svg" />
      <NavMenu>
        <a href="#">
          <img src="/images/home-icon.svg" alt="" />
          <span>HOME</span>
        </a>
        <a href="#">
          <img src="/images/search-icon.svg" alt="" />
          <span>SEARCH</span>
        </a>
        <a href="#">
          <img src="/images/watchlist-icon.svg" alt="" />
          <span>WATCHLIST</span>
        </a>
        <a href="#">
          <img src="/images/original-icon.svg" alt="" />
          <span>ORIGINALS</span>
        </a>
        <a href="#">
          <img src="/images/movie-icon.svg" alt="" />
          <span>MOVIES</span>
        </a>
        <a href="#">
          <img src="/images/series-icon.svg" alt="" />
          <span>SERIES</span>
        </a>
      </NavMenu>
      <UserImg src="/images/photo1.jpg" />
    </Nav>
  );
}

const Nav = styled.div`
  height: 7rem;
  background-color: #090b13;
  display: flex;
  align-items: center;
  padding: 0 3.6rem;
  overflow-x: hidden;
`;

const Logo = styled.img`
  width: 8rem;
`;

const NavMenu = styled.div`
  display: flex;
  flex: 1;
  margin-left: 2rem;
  align-items: center;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 1.2rem;
    cursor: pointer;

    img {
      height: 2rem;
    }

    span {
      font-size: 1.3rem;
      letter-spacing: 1.42px;
      position: relative;

      &::after {
        content: "";
        height: 2px;
        background-color: white;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -6px;
        opacity: 0;
        transform-origin: left center;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        transform: skewX(0);
      }
    }

    &:hover {
      span::after {
        transform: scaleX(1);
        opacity: 1;
      }
    }
  }
`;

const UserImg = styled.img`
  height: 4.8rem;
  width: 4.8rem;
  cursor: pointer;
  border-radius: 50%;
`;

export default Header;
