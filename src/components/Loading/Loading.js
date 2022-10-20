import React from "react";
import { Wrapper, LoaderBackground, Container } from "./components.js";
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

export default Loading;
