import React from "react";
import styled from "styled-components";
import AudioWave from "../../components/AudioWave/AudioWave";
import { FiMusic } from "react-icons/fi";

const Homepage = () => {
  return (
    <Background>
      <StatusBanner>
        <p>
          <FiMusic />
          Título:
          <AudioName>Prueba asíncrona</AudioName>
        </p>
      </StatusBanner>
      <h3>Se está reproduciendo</h3>
      <AudioWave />
    </Background>
  );
};

const Background = styled.div`
  background: rgb(255, 234, 180);
  background: linear-gradient(
    180deg,
    rgba(255, 234, 180, 1) 0%,
    rgba(198, 119, 0, 0.6) 100%
  );
  height: 100vh;
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
    @media (min-width: 500px) {
      font-size: 33px;
    }
  }
`;

const AudioName = styled.span`
  font-weight: 400;
  margin: 0 4px;
`;

const StatusBanner = styled.div`
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

export default Homepage;
