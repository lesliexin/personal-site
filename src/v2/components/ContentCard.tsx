import React from "react";
import styled from "styled-components";
import {oldTypography} from "../oldTypography";
import {colors} from "../styles";

const CardContainer = styled.div`
  width: 80%;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  background-color: ${colors.white};
  z-index: 10;
  height: 100vh;
`;

const CardImage = styled.div`
  width: 50%;
  height: 80vh;
  background-color: ${colors.lightBlue};
  position: absolute;
  z-index: -1;
`;

const CardText = styled.div`
  width: 50%;
  align-self: flex-end;
`;
interface ContentCardProps {
  title: string;
  company: string;
  description: string;
}

export const ContentCard = ({
  title,
  company,
  description,
}: ContentCardProps) => {
  return (
    <CardContainer>

      <CardImage >hi</CardImage>
      <CardText>
        <oldTypography.LargeTitle>{title}</oldTypography.LargeTitle>
          <oldTypography.AllCapsSubtitle>
            {company}
          </oldTypography.AllCapsSubtitle>
          

      </CardText>
    </CardContainer>
  );
};
