import styled from "styled-components";
import { colors } from "../styles";
import { device } from "../styles";
const extremelylargeText = "68px";
const extraLargeText = "56px";
const largeText = "44px";
const mediumText = "32px";
const smallText = "20px";
const extraSmallText = "14px";

const ExtraLargeTitle = styled.p`
  font-size: ${extremelylargeText};
  margin: 0px;
  padding-bottom: 28px;
  font-weight: bold;
  word-wrap: normal;
  text-align: left;
  @media only screen and ${device.mobileM} {
    font-size: ${mediumText};
  }
  @media only screen and ${device.tablet} {
    font-size: ${extraLargeText};
  }
  @media only screen and ${device.laptop} {
    font-size: ${extremelylargeText};
  }
`;

const LargeTitle = styled.p`
  margin: 0px;
  // font-family: "EB Garamond", serif;
  font-weight: bold;
  font-size: ${largeText};
  word-wrap: normal;
  text-align: left;
`;

const SubTitle = styled.span`
  margin: 0px;
  // font-family: "Open Sans", sans-serif;
  font-size: ${smallText};
  word-wrap: normal;
  text-align: left;
`;

const SubTitleUnderline = styled.a`
  margin: 0px;
  // font-family: "Open Sans", sans-serif;
  font-size: ${smallText};
  word-wrap: normal;
  text-align: left;
  border-bottom: 3px solid ${colors.white};
  cursor: pointer;
  text-decoration: none;
  color: ${colors.black};
`;

const AllCapsSubtitle = styled.p`
  margin: 0px;
  // font-family: "Open Sans", sans-serif;
  font-size: ${extraSmallText};
  word-wrap: normal;
  text-align: left;
  text-transform: uppercase;
`;

const Body = styled.span`
  margin: 0px;
  // font-family: "Open Sans", sans-serif;
  font-size: ${extraSmallText};
  word-wrap: normal;
  text-align: left;
`;

export const oldTypography = {
  ExtraLargeTitle: ExtraLargeTitle,
  LargeTitle: LargeTitle,
  SubTitle: SubTitle,
  SubTitleUnderline: SubTitleUnderline,
  AllCapsSubtitle: AllCapsSubtitle,
  Body: Body,
};
