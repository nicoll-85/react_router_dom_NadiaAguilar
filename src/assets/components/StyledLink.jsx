import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
  font-family: "Roboto", sans-serif;
  font-size: 18px;
  color: #4c2931;
  cursor: pointer;
  font-weight: 700;
  text-decoration: none;

  &:hover {
    color: #c44b69;
  }
`;

export default StyledLink;
