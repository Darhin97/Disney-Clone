import styled from "styled-components";

import React from "react";

const Login = (props) => {
  return (
    <Container>
      <Content>
        <BgImage />
      </Content>
    </Container>
  );
};

const Container = styled.section`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100vh;
`;

const Content = styled.div`
  margin-bottom: 10vw;
  width: 100%;
  position: relative;
  min-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  flex-direction: column;
  padding: 8rem 4rem;
  height: 100%;
`;

const BgImage = styled.div``;

export default Login;
