import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  background-color: #c4acb2;
  padding: 60px;
  font-family: "Roboto", sans-serif;
  height: 100vh;
  font-size: 18px;
`;

const UserDetail = () => {
  const { id } = useParams();

  return (
    <Container>
      <h1>Detalles del usuario {id}</h1>
      <hr />
      <h3>Nombre: Juan Perez</h3>
      <h3>Ocupación: Arquitecto</h3>
      <h3>
        Descripción:diseña espacios funcionales y estéticamente atractivos,
        buscando siempre la innovación en sus proyectos arquitectónicos.
      </h3>
    </Container>
  );
};

export default UserDetail;
