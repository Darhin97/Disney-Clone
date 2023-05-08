import styled from "styled-components";

import React from "react";

const Login = (props) => {
  return (
    <Container>
      <CTA>
        <CTALogoOne src="/images/cta-logo-one.svg" />
        <SignUp>Get All There</SignUp>
        <Description>
          {" "}
          Get Premier Access to Raya and the Last Dragon for an additional fee
          with a Disney+ subscription. As of 03/26/21, the price of Disney+ and
          The Disney Bundle will increase by $1.
        </Description>
        <CTALogoTwo src="/images/cta-logo-two.png" />
      </CTA>
    </Container>
  );
};

const Container = styled.section`
  position: relative;
  height: calc(100vh - 7rem);
  display: flex;
  justify-content: center;
  align-items: top;

  &::before {
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url("/images/login-background.jpg");
    content: "";
    inset: 0;
    z-index: -1;
    position: absolute;
    opacity: 0.7;
  }
`;

const CTA = styled.div`
  max-width: 65rem;
  width: 80%;
  padding: 8rem 4rem;
  display: flex;
  flex-direction: column;
  margin-top: 10rem;
  align-items: center;
`;

const CTALogoOne = styled.img``;

const CTALogoTwo = styled.img`
  width: 90%;
`;

const SignUp = styled.a`
  width: 100%;
  font-weight: bold;
  text-transform: uppercase;
  background-color: #0063e5;
  padding: 17px 0;
  color: #f9f9f9;
  border-radius: 4px;
  text-align: center;
  font-size: 1.8rem;
  cursor: pointer;
  transition: all 250ms;
  letter-spacing: 1.5;
  margin-top: 0.8rem;
  margin-bottom: 1.2rem;

  &:hover {
    background-color: #0483ee;
  }
`;

const Description = styled.p`
  color: hsla(0, 0%, 95.3%, 1);
  font-size: 1.1rem;
  margin: 0 0 24px;
  line-height: 1.5;
  letter-spacing: 1.5px;
  text-align: center;
`;
export default Login;
