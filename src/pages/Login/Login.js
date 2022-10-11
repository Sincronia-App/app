import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import Logo from "../../components/General/Logo";
import LoginBackground from "../../assets/homepage.jpg";
import Loading from "../../components/Loading/Loading";
import GlobalContext from "../../context/GlobalContex";

const Login = () => {
  const [isLoadding, setIsLoading] = useState(true);
  const { roomId } = useContext(GlobalContext);


  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 6000);
  }, []);

  if (isLoadding) {
    return <Loading />;
  }
  return (
    <Wrapper>
      <>
        <LoaderBackground background={LoginBackground}>
          <Container justifyContent="space-between">
            <div></div>
            <div>
              <Logo />
              <RoomInput>
                <input type="text" placeholder="Ingresa el número de sala" />
              </RoomInput>
            </div>
            <SubmitButton>
              <a href="/room">Entar</a>
            </SubmitButton>
          </Container>
        </LoaderBackground>
      </>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: #11a782;
  width: 100vw;
  overflow: hidden;
  min-height: 100vh;            /* fall-back */
  min-height: -moz-available;
  min-height: -webkit-fill-available;
  min-height: fill-available;
`;

const Container = styled.div`
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
  animation: fadeInFromNone 0.5s ease-out;
  @media (min-width: 768px) {
    justify-content: center;
  }
`;

const LoaderBackground = styled.div`
  position: absolute;
  width: 100%;
  background-image: url(${(props) => props.background});
  background-size: cover;
  background-position: left;
  background-repeat: no-repeat;
  min-height: 100vh;            /* fall-back */
  min-height: -moz-available;
  min-height: -webkit-fill-available;
  min-height: fill-available;
  top: 0;
  left: 0;
`;

const RoomInput = styled.div`
  padding: 0 1rem;
  input {
    padding: 14px;
    border-radius: 12px;
    width: 100%;
    font-size: 14px;
    max-width: 400px;
    border: 1px solid #c2c2c2;
    box-sizing: border-box;
  }
`;

const SubmitButton = styled.div`
  padding: 1rem;
  a {
    text-decoration: none;
    margin: 0 auto;
    display: block;
    box-sizing: border-box;
    padding: 14px;
    border: none;
    background-color: #3f51b5;
    width: 100%;
    border-radius: 21px;
    text-transform: uppercase;
    color: white;
    font-weight: 800;
    max-width: 400px;
  }
`


export default Login;
