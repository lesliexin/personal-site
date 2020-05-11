import React from "react";
import styled from "styled-components";
import { colors, typography, padding } from "../styles";

const CardContainer = styled.div`
  height: 332px;
  background-color: ${colors.white};
  display: flex;
  margin: 200px 148px;
  justify-content: center;
`;

const CardImage = styled.div`
  width: 60%;
  background-color: ${colors.white};
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
  border-radius: 16px;
`;

const CardText = styled.div`
  width: 40%;
  padding: 12px 0px 12px 60px;
`;
interface HomePageCardProps {
  title: string;
  company: string;
  description: string;
}

export const HomePageCard = ({
  title,
  company,
  description
}: HomePageCardProps) => {
  return (
    <CardContainer>
      <CardImage />
      <CardText>
        <typography.LargeTitle>{title}</typography.LargeTitle>
        <padding.Top24>
          <typography.AllCapsSubtitle>{company}</typography.AllCapsSubtitle>
        </padding.Top24>
        <padding.Top24>
          <typography.Body>{description}</typography.Body>
        </padding.Top24>
      </CardText>
    </CardContainer>
  );
};
