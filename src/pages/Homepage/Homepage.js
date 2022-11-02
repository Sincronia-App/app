import React, { useState, useEffect } from "react";
import styled from "styled-components";
import AudioWave from "../../components/AudioWave/AudioWave";
import { FiMusic } from "react-icons/fi";
import Modal from "../../components/Modal";
import Loader from "../../components/General/Loader/Loader";
import socketio from "socket.io-client";

const ENDPOINT = "https://api-sincronia.codigohabil.com";


const Homepage = () => {
  const [isPlay, setIsPlay] = useState(false);
  const audio = new Audio(
    "https://coderadio-relay-nyc.freecodecamp.org/radio/8010/radio.mp3"
  );

  
  
  useEffect(() => {
    const play = document.getElementById("play");
    const modal = document.querySelector(".modal");
    const background = document.querySelector(".background");
    stopAudio();
    play.onclick = () => {
      const socket = socketio.connect(ENDPOINT);
      socket.emit("message", "Hola!!"); 
      socket.on('connect', () => {
        console.log("Is connecter");
      });
      socket.on('message', (msg) => {
        if (msg === "active") {
          console.log(msg);
          background.classList.remove("loading");
          handlePlay();
          setIsPlay(true);
        }
      });

      modal.style.display = "none";
      background.style.opacity = 1;
    };
  });
  
  useEffect(() => {
    audio.pause();
  }, [window.location.pathname]);
  

  const handlePlay = () => {
    audio.play();
    audio.volume = 0.5;
  };

  const stopAudio = () => {
    audio.pause();
  };

  const unmuted = () => {
    audio.volume = 0.5;
    audio.play();
  };

  return (
    <>
      <Modal>
        <Container>
          <div class="center">
            <h3>Bienvenid/a a sincronia!</h3>
            <p>
              Actualmente está en fase beta la aplicación, por lo que cualquier
              comportamiento no esperado por favor ponte en contacto con:{" "}
            </p>
          </div>
          <button id="play">Aceptar</button>
        </Container>
      </Modal>
      <Wrapper>
        <Background className="background loading">
          <StatusBanner>
            <p>
              <FiMusic />
              Título:
              {isPlay ? (
                <AudioName>Prueba async - Radio ChillHop 27/7</AudioName>
              ) : (
                ""
              )}
            </p>
          </StatusBanner>
          {isPlay ? (
            <>
              <h3 onClick={unmuted}>Se está reproduciendo</h3>
              <AudioWave />
            </>
          ) : (
            <>
              <h3>Esperando respuesta...</h3>
              <Loader />
            </>
          )}
        </Background>
      </Wrapper>
    </>
  );
};

const Container = styled.div`
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

const Wrapper = styled.div`
  min-height: 100vh; /* fall-back */
  min-height: -moz-available;
  min-height: -webkit-fill-available;
  min-height: fill-available;
`;

const Background = styled.div`
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

const AudioName = styled.span`
  font-weight: 400;
  margin: 0 4px;
  animation: show 0.5s ease-in-out;
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
