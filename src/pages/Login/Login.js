import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Loader from "../../components/General/Loader/Loader";
import Logo from "../../components/General/Logo";
import LoadingBackground from "../../assets/loading.jpg";
import LoginBackground from "../../assets/homepage.png";

const Login = () => {
  const [isLoadding, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
  }, []);

  return (
    <Wrapper>
      <LoaderBackground background={isLoadding ? LoadingBackground : LoginBackground}>
        <>
            <Container justifyContent="center">
              <div></div>
              <Logo />
              {isLoadding ? <Loader /> : null}
              <input type='text' placeholder="Número de sala"/>
            </Container>
        </>
      </LoaderBackground>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: #11A782;
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
  //animation: fadeInFromNone 0.5s ease-out;
`;

const LoaderBackground = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  background-image: url(${(props) => props.background});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  top: 0;
  left: 0;
`;


export default Login;
