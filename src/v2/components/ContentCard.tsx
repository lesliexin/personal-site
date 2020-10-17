import React, {useState} from "react";
import styled, { css } from "styled-components";
import {oldTypography} from "../oldTypography";
import {colors} from "../styles";
import cogniteMock from "../../assets/cognite-mock.svg";

const CardContainer = styled.div`
  width: 80%;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  background-color: ${colors.white};
  z-index: 10;
  height: 100vh;
`;

const CardImageCognite = styled.div<any>`
  width: 50%;
  height: 80vh;
  background-color: ${colors.cardBackground1};
  position: absolute;
  z-index: -1;
  transition: width 1.8s;
  background-image: url(${cogniteMock});
  background-repeat: no-repeat;
  background-position: left center;
  background-size: 80%;
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
  padding-top: 8vh;
`;
interface ContentCardProps {
  title: string;
  company: string;
  description: string;
  companyText: string;
}

export const ContentCard = ({
  title,
  company,
  companyText,
  description,
}: ContentCardProps) => {
  const [isCardExpanded, setIsCardExpanded] = useState(false);

  return (
    <CardContainer>
      {company === 'cognite' && <CardImageCognite isCardExpanded={isCardExpanded}>hi</CardImageCognite>}
      <CardText isCardExpanded={isCardExpanded}>
        <oldTypography.LargeTitle style={{paddingBottom: "5vh"}}>{title}</oldTypography.LargeTitle>
          <oldTypography.AllCapsSubtitle style={{paddingBottom: "5vh"}}>
            {companyText}
          </oldTypography.AllCapsSubtitle>
          <div onClick={() => {setIsCardExpanded(!isCardExpanded)}}><oldTypography.CardLinks>More info</oldTypography.CardLinks></div>
      </CardText>
    </CardContainer>
  );
};
