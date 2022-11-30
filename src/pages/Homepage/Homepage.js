import React, { useState, useEffect } from "react";
import AudioWave from "../../components/AudioWave/AudioWave";
import { BsFillVolumeUpFill } from "react-icons/bs";
import Modal from "../../components/Modal";
import Loader from "../../components/General/Loader/Loader";
import Pusher from "pusher-js";
import { getRoomInfo } from "../../helper/getRoomInfo";
import { getRoom } from "../../helper/getRoom";
import {
  Container,
  Wrapper,
  Background,
  MuteButton,
  AudioName,
} from "../../components/Homepage";
import { Channel, ChannelItem } from "../../components/Homepage/Channel";
import StatusBanner from "../../components/Homepage/StatusBanner";
import { ToastContainer, toast } from "react-toastify";

const Homepage = () => {
  const [isPlay, setIsPlay] = useState(false);
  const [isiOS, setIsIOS] = useState(false);
  const [isMutted, setIsMutted] = useState(true);
  const [urlAudio, setUrlAudio] = useState("");
  const [audio, setAudio] = useState();
  const [channelId, setChannelId] = useState(null);
  const [channels, setChannels] = useState([]);
  const [error, setError] = useState("");

  //new Audio("https://coderadio-relay-nyc.freecodecamp.org/radio/8010/radio.mp3")
  useEffect(() => {
    const play = document.getElementById("play");
    const modal = document.querySelector(".modal");
    const background = document.querySelector(".background");
    console.log("Component did mount");

    //stopAudio();
    play.onclick = () => {
      getRoom()
        .then((data) => {
          setUrlAudio(data.data.url_audio);
          setChannels(data.data.audios);
          console.log("Channel selection", data.data.audios);
        })
        .catch((error) => {
          setError(error.message);
          toast.error("Error al cargar la sala", {
            position: "top-center",
            autoClose: false,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
            toast.warn('No se ha podido conectar correctamente al servidor. Error 500', {
              position: "top-center",
              autoClose: false,
              hideProgressBar: false,
              closeOnClick: false,
              pauseOnHover: false,
              draggable: false,
              progress: undefined,
              theme: "light",
              });
        });

      const pusher = new Pusher(process.env.REACT_APP_KEY, {
        cluster: "us2",
        encrypted: true,
      });

      //getRoomInfo();
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
    setAudio(new Audio(urlAudio));
    console.log("Audio getway", urlAudio);
    const audioAux = new Audio(
      "https://coderadio-relay-nyc.freecodecamp.org/radio/8010/radio.mp3"
    );
    audioAux.play();
    audioAux.volume = 0.5;
  };

  const stopAudio = () => {
    audio.pause();
  };

  const unmuted = () => {
    setIsMutted(false);
    audio.volume = 0.5;
    audio.play();
  };

  const handleChannel = (id = 0, url) => {
    console.log("channel", id);
    console.log("url", url);
    setChannelId(10);
  };

  // get current timestamp
  const getCurrentTime = () => {
    const date = new Date();
    const time = date.getTime();

    return time + Math.floor(Math.random() * 1000);
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
        <ToastContainer
          position="top-center"
          autoClose={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          theme="light"
        />

        <Background className="background loading">
          <StatusBanner>
            {isPlay ? (
              <AudioName>Prueba async - Radio ChillHop 27/7</AudioName>
            ) : (
              ""
            )}
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
              {channelId == null ? (
                <>
                  {error === '' ?<h3>Selecciona un canal</h3> : <h3>No se ha podido cargar la sala 😔... <br/> Vuélvelo a intentar</h3>}
                  <Channel>
                    {channels.map((channel) => {
                      return (
                        <ChannelItem
                          handleChannel={handleChannel}
                          channelName={channel.label}
                          url={channel.url}
                          key={getCurrentTime()}
                        />
                      );
                    })}
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

export default Homepage;
