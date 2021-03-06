import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Cognite, projectContent } from "../projects";
import { Footer, BackButton } from "../components";
import { typography, device } from "../styles";
import styled from "styled-components";
import colors from "../styles/colours";
import titleImage from "../assets/titleImages.svg";

const TitleContainer = styled.div`
  height: 90vh;
  padding: 0px 0px 60px 80px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: ${colors.lightBlue};
  background-image: url(${titleImage});
  background-repeat: no-repeat;
  background-position: right 80%;
  background-size: 75%;

  @media ${device.mobileM} {
    padding: 20px;
    background-image: url(${titleImage});
    background-repeat: no-repeat;
    background-position: center top 5%;
    background-size: 75%;
    height: 100vh;
  }
`;

const TitleTextContainer = styled.div`
  width: 30%;

  @media ${device.mobileM} {
    width: 95%;
  }

  @media ${device.tablet} {
    width: 30%;
  }
`;

const CompanyName = styled.span`
  margin-bottom: 18px;
  font-family: "Open Sans", sans-serif;
  word-wrap: normal;
  text-align: left;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 48px;
  letter-spacing: 2px;
  text-transform: uppercase;
`;

const Role = styled.p`
  margin: 12px 0px 0px 0px;
  font-family: "Open Sans", sans-serif;
  word-wrap: normal;
  text-align: left;
  font-family: Open Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 1.5px;
  color: ${colors.headingColour};
`;

interface ProjectsContainerProps {
  company: string;
}

export const ProjectsContainer = () => {
  const [currentCompany, setCurrentCompany] = useState(projectContent.cognite);
  const location = useLocation().pathname;

  useEffect(() => {
    switch (location) {
      case "cognite": {
        setCurrentCompany(projectContent.cognite);
        break;
      }
      case "microsoft": {
        setCurrentCompany(projectContent.microsoft);
        break;
      }
      case "bungalow": {
        setCurrentCompany(projectContent.bungalow);
        break;
      }
      case "cibc": {
        setCurrentCompany(projectContent.cibc);
        break;
      }
      default: {
        setCurrentCompany(projectContent.cognite);
        break;
      }
    }
  }, [location]);

  return (
    <>
      <TitleContainer>
        <TitleTextContainer>
          <BackButton />
          <typography.NewDetailLeft>CASE STUDY</typography.NewDetailLeft>
          <typography.CaseTitle>
            {currentCompany.title1}
            <br /> {currentCompany.title2}
          </typography.CaseTitle>
          <CompanyName>{currentCompany.company}&nbsp;|&nbsp;</CompanyName>
          <CompanyName>{currentCompany.location}</CompanyName>
          <Role>Role</Role>
          {currentCompany.role.map((role) => (
            <typography.Body2>{role}</typography.Body2>
          ))}

          <Role>Team</Role>
          {currentCompany.team.map((person) => (
            <typography.Body2>{person}</typography.Body2>
          ))}

          <Role>Duration</Role>
          <typography.Body2>{currentCompany.duration}</typography.Body2>
        </TitleTextContainer>
      </TitleContainer>
      <Cognite />
      <Footer />
    </>
  );
};
