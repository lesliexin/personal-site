import React from "react";
import styled from "styled-components";
import colors from "./styles/colors";
import { HomePageCard } from "./components";
import { typography, padding } from "./styles";
import blobs from "./assets/both-blobs-med.svg";

const TitleContainer = styled.div`
  height: calc(100vh - 100px);
  width: 100%;
  background-color: ${colors.lightBlue};
  background-image: url(${blobs});
  background-repeat: no-repeat;
  background-position: 50% 0%;
  background-size: auto;
`;

const TitleTextContainer = styled.div`
  padding: 120px 0px 0px 220px;
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
