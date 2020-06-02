import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as Back } from "../assets/back.svg";
import { device } from "../styles";

const StyledBackButton = styled(Back)`
  height: 24px;
  cursor: pointer;
  margin-top: 30px;

  @media ${device.mobileM} {
    margin-bottom: 100px;
  }
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
