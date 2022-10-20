import styled from "styled-components";


export const ModalContainer = styled.div`
  background: #fff;
`;

export const ModalWrapper = styled.div`
  position: absolute;
  z-index: 100;
  width: 100%;
  min-height: 100vh; /* fall-back */
  min-height: -moz-available;
  min-height: -webkit-fill-available;
  min-height: fill-available;
  top: 0;
  left: 0;
  background-color: #fff;
  background: url(https://xhibiter-nextjs.vercel.app/_next/image?url=%2Fimages%2Fgradient.jpg&w=3840&q=75);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Content = styled.div`
  width: 100%;

  h3 {
    //margin-top: calc(32vh - 115px)!important;
    font-size: 38px !important;
    margin: 0;
    padding: 10px;
    margin-bottom: 7px;
  }
  p {
    max-width: 400px;
    font-size: 20px;
    text-align: center;
    margin: 0 auto;
  }

  height: 100%;
  margin-top: 0;
  position: absolute;
  z-index: 101;
`;

