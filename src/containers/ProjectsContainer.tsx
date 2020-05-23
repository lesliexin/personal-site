import React, { useState, useEffect } from "react";
import { Cognite, projectContent } from "../projects";
import { typography, padding } from "../styles";
import styled from "styled-components";
import colors from "../styles/colors";

const TitleContainer = styled.div`
  width: 100%;
  background-color: ${colors.lightBlue};
  padding: 0px 0px 60px 80px;
`;

const TitleTextContainer = styled.div`
  width: 66%;
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
  });

  return (
    <>
      <TitleContainer>
        <TitleTextContainer>
          <typography.TitleText90>
            {currentCompany.title}
          </typography.TitleText90>
          <typography.LargeCaps24>
            {currentCompany.company}&nbsp;|&nbsp;
          </typography.LargeCaps24>
          <typography.LargeCaps24>
            {currentCompany.location}
          </typography.LargeCaps24>
        </TitleTextContainer>
      </TitleContainer>
      <Cognite />
    </>
  );
};
