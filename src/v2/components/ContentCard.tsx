import React, {useState} from "react";
import styled, { css } from "styled-components";
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

const CardImage = styled.div<any>`
  width: 50%;
  height: 80vh;
  background-color: ${colors.lightBlue};
  position: absolute;
  z-index: -1;
  transition: width 1.8s;
  ${(props: any) => props.isCardExpanded && css`
    width: 25%
  `};
`;

const CardText = styled.div<any>`
  width: 50%;
  align-self: flex-end;
  transition: width 1.8s;
  ${(props: any) => props.isCardExpanded && css`
    width: 85%
  `};
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
  const [isCardExpanded, setIsCardExpanded] = useState(false);

  return (
    <CardContainer>

      <CardImage isCardExpanded={isCardExpanded}>hi</CardImage>
      <CardText isCardExpanded={isCardExpanded}>
        <oldTypography.LargeTitle>{title}</oldTypography.LargeTitle>
          <oldTypography.AllCapsSubtitle>
            {company}
          </oldTypography.AllCapsSubtitle>
      </CardText>
      <button onClick={() => {setIsCardExpanded(!isCardExpanded)}}>toggle card</button>
    </CardContainer>
  );
};
