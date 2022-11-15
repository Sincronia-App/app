import React, { useState, useEffect } from "react";
import styled from "styled-components";
import AudioWave from "../../components/AudioWave/AudioWave";
import { FiMusic } from "react-icons/fi";
import { BsFillVolumeUpFill } from "react-icons/bs";
import Modal from "../../components/Modal";
import Loader from "../../components/General/Loader/Loader";
import Pusher from "pusher-js";
import { getRoomInfo } from "../../helper/getRoomInfo";
import { getRoom } from "../../helper/getRoom";
import { Container, Wrapper, Background, StatusBanner, AudioName, MuteButton } from "../../components/Homepage";

const Homepage = () => {
  const [isPlay, setIsPlay] = useState(false);
  const [isiOS, setIsIOS] = useState(false);
  const [isMutted, setIsMutted] = useState(true);
  const [urlAudio, setUrlAudio] = useState("");
  const [audio, setAudio] = useState();
  const [channel, setChannel] = useState(null);

  //new Audio("https://coderadio-relay-nyc.freecodecamp.org/radio/8010/radio.mp3")

  useEffect(() => {
    const play = document.getElementById("play");
    const modal = document.querySelector(".modal");
    const background = document.querySelector(".background");

    getRoom().then((data) => {
      setUrlAudio(data.data.url_audio);
      console.log(data.data.url_audio);
    });
    //stopAudio();
    play.onclick = () => {
      const pusher = new Pusher(process.env.REACT_APP_KEY, {
        cluster: "us2",
        encrypted: true,
      });

      getRoomInfo();
      checkIOS();

      const channel = pusher.subscribe("my-channel");
      channel.bind("my-event", function (data) {
        if (data.message === "play") {
          updateDisplay(background);
        }
      });

      modal.style.display = "none";
      background.style.opacity = 1;
    };
  });

  const checkIOS = () => {
    const userAgent = window.navigator.userAgent.toLowerCase();
    if (userAgent.match(/iPad/i) || userAgent.match(/iPhone/i)) {
      if (audio) {
        audio.muted = true;
      }
      setIsIOS(true);
      console.log("isIOS");
    }
  };

  const updateDisplay = (background) => {
    background.classList.remove("loading");
    handlePlay();
    setIsPlay(true);
  };

  const handlePlay = () => {
    //setAudio(new Audio(urlAudio));
    console.log(urlAudio);
    const audio = new Audio(urlAudio);
    audio.play();
    audio.volume = 0.5;
  };

  const stopAudio = () => {
    audio.pause();
  };

  const unmuted = () => {
    setIsMutted(false);
    audio.volume = 0.5;
    audio.play();
  };

  const handleChannel = (id = 0) => {
    console.log("channel", id);
    setChannel(10);
  };

  return (
    <>
      <Modal>
        <Container>
          <div className="center">
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
              <h3>Se está reproduciendo</h3>
              {isiOS && isMutted && (
                <MuteButton onClick={unmuted}>
                  {" "}
                  <BsFillVolumeUpFill /> Click para activar sonido
                </MuteButton>
              )}
              <AudioWave />
            </>
          ) : (
            <>
              {channel == null ? (
                <>
                  <h3>Selecciona un canal</h3>
                  <Channel>
                    <div className="item" onClick={() => handleChannel(0)}>
                      <div className="icon">
                        <FiMusic />
                      </div>
                      <div className="info">
                        <h4>Canal 1</h4>
                      </div>
                    </div>

                    <div className="item" onclick={() => handleChannel(1)}>
                      <div className="icon">
                        <FiMusic />
                      </div>
                      <div className="info">
                        <h4>Canal 2</h4>
                      </div>
                    </div>
                  </Channel>
                </>
              ) : (
                <>
                  <h3>Esperando respuesta...</h3>
                  <Loader />
                </>
              )}
            </>
          )}
        </Background>
      </Wrapper>
    </>
  );
};



const Channel = styled.div`
  .item {
    cursor: pointer;
    max-width: 300px;
    display: flex;
    margin: 0 auto;
    width: 100%;
    align-items: center;
    border-radius: 10rem;
    border: 2px solid black;
    margin-bottom: 12px;
  }

  h4 {
    margin: 0;
    padding: 10px;
    font-weight: 500;
  }

  .icon {
    padding-left: 1rem;
  }
`;

export default Homepage;
