import React from "react";
import styled from "styled-components";
import colors from "../styles/colours";
import { HomePageCard } from "../components";
import { containers } from "../styles";
import { oldTypography } from "./oldTypography";
import blobs from "../assets/both-blobs-med.svg";
import { animateScroll as scroll } from "react-scroll";
import { ReactComponent as Chevron } from "../assets/chev-dark.svg";
import Canvas from "../components/Canvas";
import { draw } from "../components/Blob";
import { TopNavBar, ContentCard, OldFooter} from "./components";
import ProcessingWrapper from "./components/ProcessingWrapper";
import { generate } from 'shortid';
import sketch1 from "./components/ProcessingWrapper/sketch1/index";


const TitleTextContainer = styled.div`
  flex: 1 1 65% ;
`;

const StyledSpacer = styled.div`
  flex: 1 1 35% ;
`;

const ChevronContainer = styled.div`
  height: 120px;
  width: 100%;
  position: absolute;
  bottom: 0 ;
  display: flex;
  justify-content: center;
`;

const CardsContainer = styled.div`
  width: 100%;
  background-color: ${colors.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10vh;
`;

const StyledChevron = styled(Chevron)`
  padding-top: 20px;
  cursor: pointer;
`;

const scrollTo = (location: number) => {
  scroll.scrollTo(location);
};

const ProcessingWrapper1 = ProcessingWrapper(generate())


export const LandingPage = () => {
  return (
    <>
      <TopNavBar />
      {/* <Canvas draw={draw} style={{position: "absolute", zIndex: "-1"}}/> */}
      <ProcessingWrapper1/>
      <containers.PageContainer>
      <containers.ContentContainer2>
        <StyledSpacer/>
        <TitleTextContainer>
          <oldTypography.ExtraLargeTitle>
            Leslie Xin
          </oldTypography.ExtraLargeTitle>
          <oldTypography.SubTitle>
            Something, some words about who I am ...
          </oldTypography.SubTitle>
        </TitleTextContainer>
        </containers.ContentContainer2>
      </containers.PageContainer>
        <ChevronContainer onClick={() => scrollTo(window.innerHeight)}>
          <StyledChevron />
        </ChevronContainer>



      <CardsContainer>
        <ContentCard
          // title="Engineers Meet Data Science"
          title="Enabling Engineers to use Data Science"
          company="Cognite AS | Oslo, Norway"
          description="Design and developed a condition based monitoring tool to enable engineers to utilize complex data science models."
        />
        <ContentCard
          title="Exploring interactive diagnostics visualization"
          company="Microsoft | Seattle, US"
          description="Design and developed a condition based monitoring tool to enable engineers to utilize complex data science models."
        />
        <ContentCard
          title="Reimagining new applicant flows"
          company="Cognite AS | Oslo, Norway"
          description="Design and developed a condition based monitoring tool to enable engineers to utilize complex data science models."
        />
      </CardsContainer>
      <OldFooter/>
    </>
  );
};
