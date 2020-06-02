import React from "react";
import styled from "styled-components";
import { typography, colors } from "../styles";
import { useHistory } from "react-router-dom";

const Wrapper = styled.div`
  display: flex;
  height: 20vh;
  flex-direction: row;
  background-color: ${colors.lightBlue};
  justify-content: center;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Footer = () => {
  const history = useHistory();
  return (
    <Wrapper>
      <ContentContainer>
        <typography.Subtitle20>Thanks for reading!</typography.Subtitle20>
        <typography.NewLinks
          onClick={() => {
            history.goBack();
          }}
        >
          back to home
        </typography.NewLinks>
      </ContentContainer>
    </Wrapper>
  );
};
