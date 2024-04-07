import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import StyledLink from "../components/StyledLink";

const HomeContainer = styled.div`
  display: flex;
  margin: auto;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-image: url("/src/assets/images/bg_home.jpeg");
  background-size: cover;
  background-repeat: no-repeat;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 3rem;
  color: #c44b69;
  font-family: "Roboto", sans-serif;
  font-weight: 800;
`;

const StyledButton = styled.button`
  padding: 10px 20px;
  border-radius: 16px;
  border: none;
  background: #db5677;
  color: white;
  margin-top: 10px;
  font-family: "Roboto", sans-serif;

  &:hover {
    background: #7c3345;
  }
`;

const AuthButton = ({ isAuth, setAuth }) => {
  const handleOnClick = () => {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      localStorage.removeItem("jwt");
      setAuth(false);
      return;
    }
    localStorage.setItem("jwt", "auth");
    setAuth(true);
  };

  return (
    <StyledButton onClick={handleOnClick}>
      {!isAuth ? "Autenticar" : "Desautenticar"}
    </StyledButton>
  );
};

const Home = () => {
  const [isAuth, setAuth] = useState(false);

  return (
    <HomeContainer>
      <TextContainer>
        <Title>Bienvenidos</Title>
        <StyledLink to="/users">Nuestros Usuarios</StyledLink>
        {isAuth && <Link to="/private">Private Page</Link>}
        <AuthButton isAuth={isAuth} setAuth={setAuth} />
      </TextContainer>
    </HomeContainer>
  );
};

export default Home;
