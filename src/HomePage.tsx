import React from "react";
import styled from "styled-components";
import colors from "./styles/colors";
import { HomePageCard } from "./components";
import { typography, padding } from "./styles";

const TitleContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${colors.lightBlue};
`;

const TitleTextContainer = styled.div`
  padding: 120px 0px 0px 220px;
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
          <typography.ExtraLargeTitle>
            Hi, I'm Leslie!
          </typography.ExtraLargeTitle>
          <typography.SubTitle>
            Just finished — designing and developing products at &nbsp;
          </typography.SubTitle>
          <typography.SubTitleUnderline>Cognite</typography.SubTitleUnderline>
          <typography.SubTitle> &nbsp; in Oslo, Norway.</typography.SubTitle>
          <padding.Top24>
            <typography.SubTitle>
              Currently — studying &nbsp;
            </typography.SubTitle>
            <typography.SubTitleUnderline>
              Systems Design Engineering
            </typography.SubTitleUnderline>
            <typography.SubTitle>
              &nbsp; at the University of Waterloo.
            </typography.SubTitle>
          </padding.Top24>
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
