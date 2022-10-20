import React from "react";
import {ModalContainer, ModalWrapper, Content} from "./components.js";

const Modal = (props) => {
  return (
    <ModalContainer className="modal">
      <ModalWrapper />
      <Content>{props.children}</Content>
    </ModalContainer>
  );
};

export default Modal;
