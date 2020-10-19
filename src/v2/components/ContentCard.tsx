import React, {useState} from "react";
import { useHistory } from 'react-router-dom';
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
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
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
    width: 75%
  `};
  padding-top: 8vh;
`;

// const CardSubtext = styled.div<any>`
//   padding-left: 32px;
//   transition: padding-left 1.8s;
//   ${(props: any) => props.isCardExpanded && css`
//     padding-left: 30px;
//   `};
// `;

const CaseStudyButton = styled.button`
  border: 2px solid black;
  cursor: pointer;
  background-color: Transparent;
  border-radius: 5px;
  line-height: 28px;
  width: 122px;
  height: 38px;
  border-radius: 14px;
  // margin: 3px 2px;
  // &:hover {
  //   margin: 0px;
  //   width: 128px;
  //   height: 42px;
  // }
`;

interface ContentCardProps {
  title: string;
  company: string;
  description: string;
  location: string;
  isCaseStudy: boolean;
}

export const ContentCard = ({
  title,
  company,
  location,
  description,
  isCaseStudy,
}: ContentCardProps) => {
  const [isCardExpanded, setIsCardExpanded] = useState(false);
  const history = useHistory()
  const handleCaseStudy = () => {
    window.scrollTo(0, 0)
    history.push('cognite')
  }

  return (
    <CardContainer>
      {company === 'Cognite' && 
        <CardImageCognite isCardExpanded={isCardExpanded}>
          <div onClick={() => {setIsCardExpanded(!isCardExpanded)}}>
            {isCardExpanded && <oldTypography.CardLinks>Less</oldTypography.CardLinks>}
            {!isCardExpanded && <oldTypography.CardLinks>More</oldTypography.CardLinks>}
          </div>
        </CardImageCognite>}
      <CardText isCardExpanded={isCardExpanded}>
        <oldTypography.AllCapsSubtitle>
          {company}
        </oldTypography.AllCapsSubtitle>
        <oldTypography.LargeTitle style={{paddingBottom: "2vh", paddingTop: "2vh"}}>{title}</oldTypography.LargeTitle>
          {/* <oldTypography.AllCapsSubtitle style={{fontSize: "20px"}}>&nbsp;|&nbsp;</oldTypography.AllCapsSubtitle>
          <oldTypography.AllCapsSubtitle>
            {location}
          </oldTypography.AllCapsSubtitle> */}
          <oldTypography.Body style={{paddingTop: "2.5vh"}} >Front-end Engineer</oldTypography.Body>
          <oldTypography.Body style={{paddingTop: "1.5vh", paddingBottom: "5vh"}} >Product Designer</oldTypography.Body>
          {isCaseStudy &&
            <CaseStudyButton style={{display: "block"}} onClick={handleCaseStudy}>
              <oldTypography.CardButton>Case study</oldTypography.CardButton>
            </CaseStudyButton>
          }
          {/* <div onClick={() => {setIsCardExpanded(!isCardExpanded)}}><oldTypography.CardLinks>More info</oldTypography.CardLinks></div> */}
      </CardText>
    </CardContainer>
  );
};
