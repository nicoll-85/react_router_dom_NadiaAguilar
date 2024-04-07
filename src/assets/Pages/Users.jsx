import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import StyledLink from "../components/StyledLink";

const Container = styled.div`
  background-color: #c4acb2;
  padding: 60px;
  font-family: "Roboto", sans-serif;
  height: 100vh;
`;

const Users = () => {
  return (
    <Container>
      <h1>Listado de usuarios</h1>
      <hr />
      <ul>
        <li>
          <StyledLink to={"/users/1"}>Juan Perez</StyledLink>
        </li>
        <li>
          <StyledLink to={"/users/2"}>Maria Gonzalez</StyledLink>
        </li>
        <li>
          <StyledLink to={"/users/3"}>Pedro Rodriguez</StyledLink>
        </li>
        <li>
          <StyledLink to={"/users/4"}>Ana Martinez</StyledLink>
        </li>
        <li>
          <StyledLink to={"/users/5"}>Luis Lopez</StyledLink>
        </li>
      </ul>
    </Container>
  );
};

export default Users;
