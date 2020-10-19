import React from "react";
import styled from "styled-components";
import { colors, containers } from "../styles";
import { oldTypography } from "./oldTypography";
import air from "../assets/AIR.svg";
// import air from "../assets/AIR-browser.svg";

const CardContainer = styled.div`
  height: 332px;
  background-color: ${colors.white};
  display: flex;
  padding: 100px 148px;
  justify-content: center;
`;

const CardImage = styled.div`
  width: 60%;
  background-color: ${colors.white};
  // box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
  // box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.15);
  // border-radius: 16px;
  background-color: ${colors.lightBlue};
  background-image: url(${air});
  background-repeat: no-repeat;
  background-position: center;
  // background-size: 70%;
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
  description,
}: HomePageCardProps) => {
  return (
    <CardContainer>
      <CardImage />
      <CardText>
        <oldTypography.LargeTitle>{title}</oldTypography.LargeTitle>
        <containers.Top24>
          <oldTypography.AllCapsSubtitle>
            {company}
          </oldTypography.AllCapsSubtitle>
        </containers.Top24>
        <containers.Top24>
          <oldTypography.Body>{description}</oldTypography.Body>
        </containers.Top24>
      </CardText>
    </CardContainer>
  );
};
