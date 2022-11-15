import styled from "styled-components";

export const Container = styled.div`
  button {
    background-color: #11a782;
    color: #fff;
    border: none;
    width: 92%;
    padding: 14px;
    max-width: 420px;
    border-radius: 25px;
    font-size: 1rem;
    cursor: pointer;
    text-transform: uppercase;
    font-weight: 600;
    position: absolute;
    bottom: 1rem;
    left: 0;
    right: 0;
    margin: 0 auto;
    &:hover {
      background-color: #0f8a6b;
    }
  }
  .center {
    position: absolute;
    left: 0;
    right: 0;
    margin: 0 auto;
    top: 30vh;
  }
  @media (min-width: 768px) {
    button {
      bottom: 35vh;
    }
  }
`;

export const Wrapper = styled.div`
  min-height: 100vh; /* fall-back */
  min-height: -moz-available;
  min-height: -webkit-fill-available;
  min-height: fill-available;
`;

export const Background = styled.div`
  &.loading {
    background: linear-gradient(
      180deg,
      rgb(211 233 255) 0%,
      rgb(255 255 255 / 60%) 100%
    );
    transition: all 0.5s ease-out;
  }
  opacity: 1;
  position: absolute;
  left: 0;
  min-height: 100vh;
  width: 100%;
  min-width: -webkit-fill-available;
  min-height: fill-available;
  //height: 100vh; /* fall-back */
  opacity: 0;
  background: rgb(255, 234, 180);
  background: linear-gradient(
    180deg,
    rgba(255, 234, 180, 1) 0%,
    rgba(198, 119, 0, 0.6) 100%
  );
  //height: 100vh;
  svg {
    margin-right: 10px;
  }

  h3 {
    color: #2d2d2d;
    text-align: center;
    font-size: 30px;
    margin-top: calc(32vh - 50px);
    letter-spacing: -2px;
    padding: 0 4rem;
    animation: show 0.5s ease-in-out;
    @media (min-width: 500px) {
      font-size: 33px;
    }
  }
`;

export const AudioName = styled.span`
  font-weight: 400;
  margin: 0 4px;
  animation: show 0.5s ease-in-out;
`;

export const StatusBanner = styled.div`
  background-color: #00000017;
  p {
    margin: 0;
    font-weight: 600;
    padding: 10px;
    font-size: 14px;
    align-items: center;
    display: flex;
    @media (min-width: 500px) {
      font-size: 16px;
    }
  }
`;

export const MuteButton = styled.div`
  font-size: 16px;
  border: 1px solid gray;
  width: fit-content;
  padding: 10px 21px;
  border-radius: 25px;
  margin: 0 auto;
  cursor: pointer;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 50%;
  background-color: #e5e5e5ba;
  z-index: 20;
  backdrop-filter: blur(5px);
  display: flex;
  align-items: center;
  &:hover {
    background-color: #e5e5e5;
  }
`;