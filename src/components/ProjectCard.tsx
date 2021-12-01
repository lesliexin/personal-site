import React from "react";
import styled from "styled-components";
import { typography, colors } from "../styles";

const CardContainer = styled.div`
  height: 250px;
  width: 270px;
  flex-direction: column;
  margin-bottom: 8vh;
`;

interface ProjectCardProps {
  image: any;
  name: string;
  description: string;
}

export const ProjectCard = ({ image, name, description }: ProjectCardProps) => {
  return (
    <CardContainer>
      <img
        alt="Waterworks"
        style={{
          width: "100%",
        }}
        src={image}
      />
      <typography.TitleLinks href="http://waterworks.digital/" target="_blank">
        {name}
      </typography.TitleLinks>
      <typography.Description margin="8px">
        {description}
      </typography.Description>
    </CardContainer>
  );
};
