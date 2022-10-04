import React from "react";
import styled from "styled-components";

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

const Container = styled.div`
    //height: calc(100% - 4rem);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    animation: show 2s ease-out;
    @keyframes blink {
        0% {
            border: 10px solid #fff9;
        }
        50% {
            border: 5px solid #ffffff42;
        }
        100% {
            border: 10px solid #fff9;
        }
    }
    .circle {
        &:nth-child(1) {
            animation-delay: 0.5s;
        }
        }
`

const OuterCircle = styled.div`
  width: 170px;
  height: 170px;
  border: 2px solid #fff;
  opacity: 0.5;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 90%;
  animation: blink 1s ease-in-out infinite;
`;

const InnerCircle = styled.div`
  width: 150px;
  height: 150px;
  border: 5px solid #e6a863;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 90%;
  &:hover {
    background-color: white;
    cursor: pointer;
    transition: 1s;
  }
`;

const Loader = styled.div`
  height: 70px;
  display: flex;
  align-items: center;
  .stroke {
    display: block;
    position: relative;
    background-color: #D78E21;
    height: 100%;
    width: 8px;
    border-radius: 50px;
    margin: 0 5px;
    animation: animate 0.8s linear infinite;
    &:nth-child(1) {
      animation-delay: 0.1s;
    }
    &:nth-child(2) {
      animation-delay: 0.3s;
    }
    &:nth-child(3) {
      animation-delay: 0.4s;
    }
    &:nth-child(4) {
      animation-delay: 0.5s;
    }
    &:nth-child(5) {
      animation-delay: 0.4s;
    }
    &:nth-child(6) {
      animation-delay: 0.3s;
    }
    &:nth-child(7) {
      animation-delay: 0.1s;
    }
  }
  @keyframes animate {
    50% {
      height: 20%;
    }
    100% {
      height: 100%;
    }
  }
`;

export default AudioWave;
