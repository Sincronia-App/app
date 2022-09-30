import React from "react";
import styled from "styled-components";
import Loader from "../General/Loader/Loader";
import Logo from "../General/Logo";
import LoadingBackground from "../../assets/loading.jpg";

const Loading = () => {
    return (
      <Wrapper>
        <>
          <LoaderBackground background={LoadingBackground}>
            <Container justifyContent="center">
              <Logo />
              <Loader />
            </Container>
          </LoaderBackground>
        </>
      </Wrapper>
    );
  }

const Wrapper = styled.div`
  background-color: #11a782;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  height: 100vh;
  animation: fadeInFromNone 0.5s ease-out;
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

export default Loading;
