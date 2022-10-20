import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: #11a782;
  width: 100vw;
  overflow: hidden;
  min-height: 100vh;            /* fall-back */
  min-height: -moz-available;
  min-height: -webkit-fill-available;
  min-height: fill-available;
  animation: fadeInFromNone 0.5s ease-out;
`;

export const Container = styled.div`
  position: absolute;
  width: 100%;
  min-height: 100vh;            /* fall-back */
  min-height: -moz-available;
  min-height: -webkit-fill-available;
  min-height: fill-available;
  display: flex;
  flex-direction: column;
  justify-content: ${(props) => props.justifyContent};
  top: 0;
  left: 0;
`;

export const LoaderBackground = styled.div`
  position: absolute;
  width: 100%;
  min-height: 100vh;            /* fall-back */
  min-height: -moz-available;
  min-height: -webkit-fill-available;
  min-height: fill-available;
  background-image: url(${(props) => props.background});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  top: 0;
  left: 0;
`;
