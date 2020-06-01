import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as Back } from "../assets/back.svg";

const StyledBackButton = styled(Back)`
  cursor: pointer;
`;

export const BackButton = () => {
  const history = useHistory();

  return (
    <StyledBackButton
      onClick={() => {
        history.goBack();
      }}
    />
  );
};
