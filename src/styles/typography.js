import styled from "styled-components";
import colors from "./colors";
import { device } from "./device";
const extraLargeText = "42px";
const largeText = "36px";
const bodyText = "16px";
const smallText = "14px";
const extraSmallText = "12px";
const tinyText = "10px";

// Large Titles
const NewTitle = styled.p`
  margin: 0px;
  font-size: ${extraLargeText};
  padding-bottom: 6px;
  font-family: "Open Sans", sans-serif;
  font-weight: 700;
  word-wrap: normal;
  text-align: left;
  color: ${colors.navy};

  @media ${device.mobileM} {
    font-size: ${largeText};
  }
`;

// "Currently" "Previously"
const NewHeading = styled.p`
  font-size: ${extraSmallText};
  margin: 34px 0px 10px 0px;
  font-family: "Open Sans", sans-serif;
  word-wrap: normal;
  color: ${colors.darkGrey};
  text-transform: uppercase;
  letter-spacing: 3px;
  line-height: 14px;
  font-weight: 700;
`;

// Side Nav
const NewLinks = styled.a`
  font-size: ${extraSmallText};
  font-family: "Open Sans", sans-serif;
  word-wrap: normal;
  color: ${colors.accentBlue};
  text-align: right;
  letter-spacing: 0.5px;
  cursor: pointer;
  text-decoration: none;
  line-height: 12px;
  font-weight: 700;
  &:hover {
    color: ${colors.darkGrey};
  }
`;

// Bottom of About Page
const NewLinksGrey = styled.a`
  font-size: ${extraSmallText};
  font-family: "Open Sans", sans-serif;
  word-wrap: normal;
  color: ${colors.darkGrey};
  letter-spacing: 0.5px;
  cursor: pointer;
  text-decoration: none;
  line-height: 12px;
  font-weight: 700;
  &:hover {
    color: ${colors.accentBlue};
  }
`;

// Body
const NewBody = styled.span`
font-size: ${bodyText};
  }
  margin-bottom: 4px;
  font-family: "Open Sans", sans-serif;
  word-wrap: normal;
  color: ${colors.navy};
  letter-spacing: 0.5px;
  font-weight: 600;
  line-height: 30px;

  @media ${device.mobileM} {
    font-size: ${smallText};
  }
`;

// "Systems Design Engineering"
const NewBodyBold = styled.span`
  font-size: ${bodyText};
  margin-bottom: 4px;
  font-family: "Open Sans", sans-serif;
  word-wrap: normal;
  color: ${colors.navy};
  letter-spacing: 0.5px;
  font-weight: 700;

  @media ${device.mobileM} {
    font-size: ${smallText};
  }

  @media ${device.laptop} {
    font-size: ${bodyText};
  }
`;

// About page
// "building software for non-profit organizations", etc
const NewBodyLink = styled.a`
  font-size: ${bodyText};
  margin-bottom: 4px;
  font-family: "Open Sans", sans-serif;
  word-wrap: normal;
  color: ${colors.navy};
  cursor: pointer;
  text-decoration: none;
  letter-spacing: 0.5px;
  font-weight: 700;
  line-height: 30px;
  &:hover {
    color: ${colors.accentBlue};
  }

  @media ${device.mobileM} {
    font-size: ${smallText};
  }

  @media ${device.laptop} {
    font-size: ${bodyText};
  }
`;

// Home page
// "Cognite", "Bungalow", etc
const NewBodyUnderline = styled.a`
  font-size: ${bodyText};
  margin-bottom: 4px;
  font-family: "Open Sans", sans-serif;
  word-wrap: normal;
  color: ${colors.navy};
  border-bottom: 2.5px solid ${colors.accentBlue};
  cursor: pointer;
  text-decoration: none;
  letter-spacing: 0.5px;
  font-weight: 700;
  &:hover {
    border-bottom: 2.5px solid ${colors.darkGrey};
  }

  @media ${device.mobileM} {
    font-size: ${smallText};
  }

  @media ${device.laptop} {
    font-size: ${bodyText};
  }
`;

// Home page years
const NewDetail = styled.p`
  font-size: ${tinyText};
  margin: 0px 12px 0px 0px;
  font-family: "Open Sans", sans-serif;
  word-wrap: normal;
  color: ${colors.darkGrey};
  text-transform: uppercase;
  letter-spacing: 3px;
  text-align: right;
  font-weight: 700;
`;

// Home page
// "case study here"
const StyledMark = styled.mark`
  background-color: ${colors.accentYellow};
  font-size: ${extraSmallText};
  margin-bottom: 4px;
  font-family: "Open Sans", sans-serif;
  word-wrap: normal;
  color: ${colors.navy};
  cursor: pointer;
  text-decoration: none;
  letter-spacing: 0.5px;
  font-weight: 700;
  &:hover {
    background-color: yellow;
  }
`;

// Case study
// H1
const CaseTitle = styled.p`
  font-size: ${largeText};
  margin: 0px;
  font-family: "Open Sans", sans-serif;
  font-weight: bold;
  word-wrap: normal;
  text-align: left;
  line-height: 48px;

  @media ${device.mobileM} {
    font-size: ${largeText};
  }
`;

// Case study
// H2
const LargeSubtitle = styled.p`
  font-family: Open Sans;
  margin: 0px;
  font-style: normal;
  font-weight: bold;
  font-size: ${largeText};
  line-height: 48px;
  letter-spacing: 1.5px;
  color: ${colors.accentBlue};
`;

// Case study
// H3
const Subtitle20 = styled.span`
  margin: 32px 0px 6px 0px;
  font-family: "Open Sans", sans-serif;
  word-wrap: normal;
  text-align: left;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: ${largeText};
  letter-spacing: 1.5px;
`;

// Case study
// Title page text
const Body2 = styled.p`
  font-size: ${smallText};
  line-height: 26px;
  margin: 0px;
  font-family: "Open Sans", sans-serif;
  word-wrap: normal;
  color: ${colors.black};
  letter-spacing: 1px;
  font-weight: normal;
`;

// Case study
// Title page text
const BodyMain = styled.p`
  font-size: ${smallText};
  line-height: 30px;
  margin: 0px;
  font-family: "Open Sans", sans-serif;
  word-wrap: normal;
  color: ${colors.black};
  letter-spacing: 1px;
  font-weight: 600;
`;

// Case study
// Project section, small text above H2
const NewDetailLeft = styled.p`
  font-size: ${tinyText};
  font-family: "Open Sans", sans-serif;
  word-wrap: normal;
  color: ${colors.black};
  text-transform: uppercase;
  letter-spacing: 3px;
  text-align: left;
  font-weight: 600;
  margin-top: 48px;
`;

// Case study
// H4
const GreySubtile = styled.p`
  font-size: ${bodyText};
  font-family: "Open Sans", sans-serif;
  font-style: normal;
  font-weight: bold;
  line-height: 30px;
  color: ${colors.darkGrey};
  letter-spacing: 1.5px;

  @media ${device.mobileM} {
    font-size: ${smallText};
  }

  @media ${device.laptop} {
    font-size: ${bodyText};
  }
`;

export const typography = {
  NewTitle: NewTitle,
  NewLinks: NewLinks,
  NewHeading: NewHeading,
  NewBody: NewBody,
  NewDetail: NewDetail,
  NewBodyUnderline: NewBodyUnderline,
  NewBodyBold: NewBodyBold,
  CaseTitle: CaseTitle,
  Subtitle20: Subtitle20,
  StyledMark: StyledMark,
  Body2: Body2,
  LargeSubtitle: LargeSubtitle,
  NewDetailLeft: NewDetailLeft,
  BodyMain: BodyMain,
  GreySubtile: GreySubtile,
  NewLinksGrey: NewLinksGrey,
  NewBodyLink: NewBodyLink,
};
