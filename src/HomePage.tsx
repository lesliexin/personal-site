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
            Just finished — designing and developing products at&nbsp;
          </typography.SubTitle>
          <typography.SubTitleUnderline>Cognite</typography.SubTitleUnderline>

          <typography.SubTitle> &nbsp;in Oslo, Norway.</typography.SubTitle>
          <padding.Top24>
            <typography.SubTitle>
              Currently — studying&nbsp;
            </typography.SubTitle>
            <typography.SubTitleUnderline>
              Systems Design Engineering
            </typography.SubTitleUnderline>
            <typography.SubTitle>
              &nbsp;at the University of Waterloo.
            </typography.SubTitle>
          </padding.Top24>
        </TitleTextContainer>
      </TitleContainer>

      <CardsContainer>
        <HomePageCard
          // title="Engineers Meet Data Science"
          title="Data Science Tools For Engineers"
          company="Cognite AS | Oslo, Norway"
          description="Design and developed a condition based monitoring tool to enable engineers to utilize complex data science models."
        />
        <HomePageCard
          // title="Improving Admin Troubleshooting"
          title="Creating Proactive Diagnostics"
          company="Microsoft | Seattle, US"
          description="Developed an end-to-end diagnostics tool for 40,000+ companies projected to
          decrease support ticket volume by 20% and increase NPS by 7 pts."
        />
        <HomePageCard
          // title="Resdesigning a New Applicant Flow"
          title="Resdesigning New Applicant Flows"
          company="Atomic Labs - Bungalow | Kitchener, Canada"
          description="Redesigned and prototyped initial resident application in Figma, informed by
          cognitive walkthrough user testing, increasing sign-up conversion rate by 15%."
        />
        <HomePageCard
          // title="Creating a Usable Bitcoin Wallet"
          title="Enabling Smart Transactions"
          company="Live Labs - CIBC | Toronto, Canada"
          description="Drove product vision to develop an internal Bitcoin wallet iOS and Android
          application, allowing users to seamlessly and securely keep a community
          financial ledger."
        />
      </CardsContainer>
    </>
  );
};
