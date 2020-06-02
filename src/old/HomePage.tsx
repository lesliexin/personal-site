import React from "react";
import styled from "styled-components";
import colors from "../styles/colors";
import { HomePageCard } from "../components";
import { containers } from "../styles";
import { oldTypography } from "./oldTypography";
import blobs from "../assets/both-blobs-med.svg";
import { animateScroll as scroll } from "react-scroll";
import { ReactComponent as Chevron } from "../assets/chev-dark.svg";

const TitleContainer = styled.div`
  height: calc(100vh - 220px);
  width: 100%;
  background-color: ${colors.lightBlue};
  background-image: url(${blobs});
  background-repeat: no-repeat;
  background-position: 50% 0%;
  background-size: auto;
`;

const TitleTextContainer = styled.div`
  padding: 90px 0px 0px 220px;
`;

const ChevronContainer = styled.div`
  height: 120px;
  width 100%;
  background-color: ${colors.lightBlue};
  position: absolute;
  bottom: 0 ;
  display: flex;
  justify-content: center;
`;

const CardsContainer = styled.div`
  width: 100%;
  background-color: ${colors.white};
  display: flex
  flex-direction: column;
`;

const StyledChevron = styled(Chevron)`
  padding-top: 20px;
  cursor: pointer;
`;

const scrollTo = (location: number) => {
  scroll.scrollTo(location);
};

export const LandingPage = () => {
  return (
    <>
      <TitleContainer>
        <TitleTextContainer>
          <oldTypography.ExtraLargeTitle>
            Hey, I'm Leslie!
          </oldTypography.ExtraLargeTitle>
          <oldTypography.SubTitle>
            Just finished — designing and developing products at&nbsp;
          </oldTypography.SubTitle>
          <oldTypography.SubTitleUnderline
            href="https://www.cognite.com/en/"
            target="_blank"
          >
            Cognite
          </oldTypography.SubTitleUnderline>

          <oldTypography.SubTitle>
            {" "}
            &nbsp;in Oslo, Norway.
          </oldTypography.SubTitle>
          <containers.Top24>
            <oldTypography.SubTitle>
              Currently — studying&nbsp;
            </oldTypography.SubTitle>
            <oldTypography.SubTitleUnderline
              href="https://uwaterloo.ca/systems-design-engineering/about-systems-design-engineering/what-systems-design-engineering"
              target="_blank"
            >
              Systems Design Engineering
            </oldTypography.SubTitleUnderline>
            <oldTypography.SubTitle>
              &nbsp;at the University of Waterloo.
            </oldTypography.SubTitle>
          </containers.Top24>
        </TitleTextContainer>
        <ChevronContainer onClick={() => scrollTo(window.innerHeight)}>
          <StyledChevron />
        </ChevronContainer>
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
