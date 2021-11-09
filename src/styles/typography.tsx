import styled, { AnyStyledComponent, css } from "styled-components";
import colors from "./colours";
import { device } from "./device";
import { NavLink } from "react-router-dom";

const largeText = "36px";
const mediumText = "24px";
const headingText = "18px";
const bodyText = "16px";
const smallText = "14px";
const extraSmallText = "12px";
const tinyText = "10px";

// Large Titles
const Bio = styled.span<any>`
  font-size: ${mediumText};
  margin: 0 0 12px 0;
  font-family: "Inter", sans-serif;
  font-weight: 600;
  word-wrap: normal;
  text-align: left;
  line-height: 36px;
  color: ${colors.black};

  ${(props: any) =>
    props.isHighlighted &&
    css`
      background-color: ${colors.accentYellow};
    `};

  @media ${device.mobileM} {
    font-size: ${largeText};
  }
`;

// "at the moment i’m... " "Previously"
const Heading = styled.p`
  font-size: ${headingText};
  margin: 48px 0px 18px 0px;
  font-family: "Inter";
  word-wrap: normal;
  color: ${colors.accentColour};
  letter-spacing: 1px;
  line-height: 30px;
  font-weight: 700;
`;

// Side Nav
const NewLinks = styled(NavLink)`
  font-size: ${bodyText};
  font-family: "Inter", sans-serif;
  word-wrap: normal;
  color: ${colors.baseTextColour};
  text-align: left;
  letter-spacing: 0.5px;
  cursor: pointer;
  text-decoration: none;
  margin: 0 0 6px 0;
  line-height: 12px;
  font-weight: 400;
  &:hover {
    color: ${colors.accentColour};
  }
`;

// Body
const NewBody = styled.span`
  font-size: ${bodyText};
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

const CompanyTitles = styled.span`
  font-size: ${bodyText};
  font-family: "Open Sans", sans-serif;
  margin-bottom: 8px;
  word-wrap: normal;
  color: ${colors.black};
  letter-spacing: 0.5px;
  font-weight: 600;

  @media ${device.mobileM} {
    font-size: ${smallText};
  }
`;

const TitleLinks = styled.a`
  font-size: ${bodyText};
  font-family: "Open Sans", sans-serif;
  margin-bottom: 8px;
  text-decoration: none;
  word-wrap: normal;
  color: ${colors.black};
  letter-spacing: 0.5px;
  font-weight: 600;

  &:hover {
    border-bottom: 2px solid ${colors.darkGrey};
    cursor: pointer;
  }

  @media ${device.mobileM} {
    font-size: ${smallText};
  }
`;

const ListItems = styled.span`
  font-size: ${smallText};
  font-family: "Inter", sans-serif;
  margin-bottom: 6px;
  word-wrap: normal;
  color: ${colors.black};
  letter-spacing: 0.5px;
  font-weight: 400;

  @media ${device.mobileM} {
    font-size: ${smallText};
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
    color: ${colors.accentColour};
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
  color: ${colors.black};
  cursor: pointer;
  text-decoration: none;
  letter-spacing: 0.5px;
  display: inline-block;
  line-height: 16px;
  font-weight: 700;
  &:hover {
    border-bottom: 2px solid ${colors.darkGrey};
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
  margin: 0px 14px 0px 0px;
  font-family: "Open Sans", sans-serif;
  word-wrap: normal;
  color: ${colors.darkGrey};
  text-transform: uppercase;
  letter-spacing: 3px;
  text-align: right;
  font-weight: 700;
`;

// Home page years
const Description = styled.p<any>`
  font-size: ${smallText};
  font-family: "Inter", sans-serif;
  margin: 0 0 20px 0;
  word-wrap: normal;
  letter-spacing: 0.5px;
  color: ${colors.black};
  font-weight: 400;
  width: 90%;
  line-height: 20px;

  ${(props: any) =>
    props.margin &&
    css`
      margin-bottom: ${props.margin};
    `};
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
    font-size: 28px;
    line-height: 36px;
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
  color: ${colors.headingColour};
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

  @media ${device.mobileM} {
    font-size: ${tinyText};
  }
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
  Bio: Bio,
  NewLinks: NewLinks,
  Heading: Heading,
  NewBody: NewBody,
  NewDetail: NewDetail,
  NewBodyUnderline: NewBodyUnderline,
  CaseTitle: CaseTitle,
  Subtitle20: Subtitle20,
  Body2: Body2,
  LargeSubtitle: LargeSubtitle,
  NewDetailLeft: NewDetailLeft,
  BodyMain: BodyMain,
  GreySubtile: GreySubtile,
  NewBodyLink: NewBodyLink,
  Description: Description,
  CompanyTitles: CompanyTitles,
  ListItems: ListItems,
  TitleLinks: TitleLinks,
};
