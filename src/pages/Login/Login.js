import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Logo from "../../components/General/Logo";
import LoginBackground from "../../assets/homepage.jpg";
import Loading from "../../components/Loading/Loading";

const Login = () => {
  const [isLoadding, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 6000);
  }, []);

  if (isLoadding) {
    return <Loading />;
  }
  return (
    <Wrapper>
      <>
        <LoaderBackground background={LoginBackground}>
          <Container justifyContent="space-between">
            <div></div>
            <div>
              <Logo />
              <RoomInput>
                <input type="text" placeholder="Ingresa el número de sala" />
              </RoomInput>
            </div>
            <SubmitButton>
              <input type="submit" value="Entrar" />
            </SubmitButton>
          </Container>
        </LoaderBackground>
      </>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: #11a782;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  height: 100vh;
`;

const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: ${(props) => props.justifyContent};
  top: 0;
  left: 0;
  animation: fadeInFromNone 0.5s ease-out;
  @media (min-width: 768px) {
    justify-content: center;
  }
`;

const LoaderBackground = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  background-image: url(${(props) => props.background});
  background-size: cover;
  background-position: left;
  background-repeat: no-repeat;
  top: 0;
  left: 0;
`;

const RoomInput = styled.div`
  padding: 0 1rem;
  input {
    padding: 14px;
    border-radius: 12px;
    width: 100%;
    font-size: 14px;
    max-width: 400px;
    border: 1px solid #c2c2c2;
    box-sizing: border-box;
  }
`;

const SubmitButton = styled.div`
  padding: 1rem;
  input {
    padding: 14px;
    border: none;
    background-color: #3f51b5;
    width: 100%;
    border-radius: 21px;
    text-transform: uppercase;
    color: white;
    font-weight: 800;
    max-width: 400px;
  }
`


export default Login;
