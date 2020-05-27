import React, { useState, useEffect } from "react";
import { Cognite, projectContent } from "../projects";
import { typography } from "../styles";
import styled from "styled-components";
import colors from "../styles/colors";
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
`;

const TitleTextContainer = styled.div`
  width: 30%;
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
  color: ${colors.accentBlue};
`;

interface ProjectsContainerProps {
  company: string;
}

export const ProjectsContainer = ({ company }: ProjectsContainerProps) => {
  const [currentCompany, setCurrentCompany] = useState(projectContent.cognite);
  useEffect(() => {
    switch (company) {
      case "cognite": {
        setCurrentCompany(projectContent.cognite);
        break;
      }
      case "microsoft": {
        setCurrentCompany(projectContent.microsoft);
        break;
      }
      default: {
        setCurrentCompany(projectContent.cognite);
        break;
      }
    }
  }, [company]);

  return (
    <>
      <TitleContainer>
        <TitleTextContainer>
          <typography.NewDetailLeft style={{ paddingTop: "18px" }}>
            CASE STUDY
          </typography.NewDetailLeft>
          <typography.TitleText90>
            Enabling Engineers to use Data
            <br /> Science
          </typography.TitleText90>
          <CompanyName>{currentCompany.company}&nbsp;|&nbsp;</CompanyName>
          <CompanyName>{currentCompany.location}</CompanyName>
          <Role>Role</Role>
          <typography.Body2>Front-End Engineer</typography.Body2>
          <typography.Body2>Product Designer</typography.Body2>

          <Role>Team</Role>
          <typography.Body2>Me</typography.Body2>
          <typography.Body2>Infrastructure Engineer </typography.Body2>
          <typography.Body2>Data Scientist 1</typography.Body2>
          <typography.Body2>Data Scientist 2</typography.Body2>
          <typography.Body2>Front-End Engineer (50%)</typography.Body2>

          <Role>Duration</Role>
          <typography.Body2>4 Months</typography.Body2>
        </TitleTextContainer>
      </TitleContainer>
      <Cognite />
    </>
  );
};
