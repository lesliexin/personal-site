import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { typography, colors, containers } from "../styles";

const CardContainer = styled.div`
  width: 100%;
  flex-direction: column;
  margin-bottom: 8vh;
`;

const DescriptionContainer = styled.div`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  display: flex;
  margin-top: 4px;
`;

const StyledImage = styled.img`
  width: 100%;
  filter: grayscale(100%);

  &:hover {
    filter: none;
    cursor: pointer;
  }
`;

interface ProjectCardProps {
  image: any;
  name: string;
  description: string;
  tools: string;
  link: string;
  isExternal?: boolean;
}

export const ProjectCard = ({
  image,
  name,
  description,
  tools,
  link,
  isExternal = false,
}: ProjectCardProps) => {
  const history = useHistory();
  return (
    <CardContainer>
      <StyledImage
        alt="Waterworks"
        src={image}
        onClick={() => {
          if (isExternal) {
            window.open(link, "_blank");
          } else {
            history.push(link);
          }
        }}
      />
      <typography.ProjectTitle
        href="http://waterworks.digital/"
        target="_blank"
      >
        {name}
      </typography.ProjectTitle>
      <DescriptionContainer>
        {" "}
        <typography.ProjectDescription margin="8px">
          {description}
        </typography.ProjectDescription>
        <typography.ProjectDescription margin="8px">
          {tools}
        </typography.ProjectDescription>
      </DescriptionContainer>
    </CardContainer>
  );
};
