import React from "react";
import { Container, OuterCircle, Loader, InnerCircle } from "./components.js";

const AudioWave = () => {
  return (
    <Container>
      <OuterCircle className="circle">
        <InnerCircle className="circle">
          <Loader className="loader">
            <span className="stroke"></span>
            <span className="stroke"></span>
            <span className="stroke"></span>
            <span className="stroke"></span>
            <span className="stroke"></span>
            <span className="stroke"></span>
            <span className="stroke"></span>
          </Loader>
        </InnerCircle>
      </OuterCircle>
    </Container>
  );
};

export default AudioWave;
