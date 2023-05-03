import React from "react";
import styled from "styled-components";

function Movies() {
  return (
    <Container>
      <h1>Recommended for You</h1>
      <Content>
        <Wrap>
          <img src="/images/login-background.jpg" alt="" />
        </Wrap>
        <Wrap>
          <img src="/images/login-background.jpg" alt="" />
        </Wrap>
        <Wrap>
          <img src="/images/login-background.jpg" alt="" />
        </Wrap>
        <Wrap>
          <img src="/images/login-background.jpg" alt="" />
        </Wrap>
        <Wrap>
          <img src="/images/login-background.jpg" alt="" />
        </Wrap>
      </Content>
    </Container>
  );
}

const Container = styled.div``;

const Content = styled.div`
  margin-top: 2rem;
  display: grid;
  grid-gap: 2.5rem;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  object-fit: cover;
`;

const Wrap = styled.div`
  cursor: pointer;
  border-radius: 1rem;
  overflow: hidden;
  border: 3px solid rgba(249, 249, 249, 0.1);
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;

  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover {
    transform: scale(1.05);
    border: 3px solid rgba(249, 249, 249, 0.8);
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  }
`;

export default Movies;
