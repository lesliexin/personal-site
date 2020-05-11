import React from "react";
import styled from "styled-components";
import colors from "./styles/colors";
import { HomePageCard } from "./components";
import * as typography from "./styles/typography";

const TitleContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${colors.lightBlue};
`;

const TitleTextContainer = styled.div`
  padding: 120px 0px 0px 192px;
  width: 1000px;
  background-color: ${colors.lightBlue};
`;

const CardsContainer = styled.div`
  width: 100%;
  background-color: ${colors.white};
  display: flex
  flex-direction: column;
`;

export const LandingPage = () => {
  return (
    <>
      <TitleContainer>
        <TitleTextContainer>
          <typography.H1>Hi, I'm Leslie!</typography.H1>
        </TitleTextContainer>
      </TitleContainer>

      <CardsContainer>
        <HomePageCard />
        <HomePageCard />
        <HomePageCard />
      </CardsContainer>
    </>
  );
};
