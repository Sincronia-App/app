import React, { useState } from "react";
import styled from "styled-components";

const Modal = (props) => {
  return (
    <ModalContainer className="modal">
      <ModalWrapper />
      <Content>{props.children}</Content>
    </ModalContainer>
  );
};


const ModalContainer = styled.div`
  background: #fff;
`

const ModalWrapper = styled.div`
    position: absolute;
    z-index: 100;
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    background-color: #fff;
    background: url(https://xhibiter-nextjs.vercel.app/_next/image?url=%2Fimages%2Fgradient.jpg&w=3840&q=75);
`;

const Content = styled.div`
  width: 100%;

  h3 {
    margin-top: calc(32vh - 115px)!important;
    font-size: 38px!important;
    padding: 10px;
    margin-bottom: 7px;
  }
  p {
    max-width: 400px;
    font-size: 20px;
    text-align: center;
    margin: 0 auto;
  }

  position: absolute;
  z-index: 101;
  top: 10%;

  button {
    background-color: #11a782;
    color: #fff;
    border: none;
    padding: 10px 25px;
    width: 100%;
    max-width: 250px;
    border-radius: 15px;
    font-size: 14px;
    cursor: pointer;
    margin-top: 14rem;
    text-transform: uppercase;
    font-weight: 600;
    &:hover {
      background-color: #0f8a6b;
    }
  }
`;

export default Modal;
