/**
 * @providesModule TextStyles
 */
import styled from "styled-components";
import fonts from "./fonts";
import colors from "./colors";
const extralargeText = "72px";
const largeText = "40px";
const subtitleText = "20px";
const medText = "14px";

// Design 1

const ExtraLargeTitle = styled.p`
  font-size: ${extralargeText};
  margin: 0px;
  padding-bottom: 28px;
  font-family: "EB Garamond", serif;
  font-weight: bold;
  word-wrap: normal;
  text-align: left;
`;

const LargeTitle = styled.p`
  margin: 0px;
  font-family: "EB Garamond", serif;
  font-weight: bold;
  font-size: ${largeText};
  word-wrap: normal;
  text-align: left;
`;

const SubTitle = styled.span`
  margin: 0px;
  font-family: ${fonts.openSansSemibold};
  font-size: ${subtitleText};
  word-wrap: normal;
  text-align: left;
`;

const SubTitleUnderline = styled.a`
  margin: 0px;
  font-family: ${fonts.openSansBold};
  font-size: ${subtitleText};
  word-wrap: normal;
  text-align: left;
  border-bottom: 3px solid ${colors.white};
  cursor: pointer;
  text-decoration: none;
  color: ${colors.black};
`;

const AllCapsSubtitle = styled.p`
  margin: 0px;
  font-family: ${fonts.openSansBold};
  font-size: ${medText};
  word-wrap: normal;
  text-align: left;
  text-transform: uppercase;
`;

const Body = styled.span`
  margin: 0px;
  font-family: ${fonts.openSansRegular};
  font-size: ${medText};
  word-wrap: normal;
  text-align: left;
`;

// Design 2

const NewTitle = styled.p`
  margin: 0px;
  font-size: 42px;
  padding-bottom: 6px;
  font-family: "Open Sans", sans-serif;
  font-weight: 700;
  word-wrap: normal;
  text-align: left;
  color: ${colors.navy};
`;

const NewHeading = styled.p`
  font-size: 12px;
  margin: 34px 0px 10px 0px;
  font-family: "Open Sans", sans-serif;
  word-wrap: normal;
  color: ${colors.darkGrey};
  text-transform: uppercase;
  letter-spacing: 3px;
  line-height: 14px;
  font-weight: 700;
`;

const NewLinks = styled.a`
  font-size: 12px;
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

const NewBody = styled.span`
  font-size: 16px;
  margin-bottom: 4px;
  font-family: "Open Sans", sans-serif;
  word-wrap: normal;
  color: ${colors.navy};
  letter-spacing: 0.5px;
  font-weight: 600;
`;

const NewBodyBold = styled.span`
  font-size: 16px;
  margin-bottom: 4px;
  font-family: "Open Sans", sans-serif;
  word-wrap: normal;
  color: ${colors.navy};
  letter-spacing: 0.5px;
  font-weight: 700;
`;

const NewBodyUnderline = styled.a`
  font-size: 16px;
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
`;

const NewDetail = styled.p`
  font-size: 10px;
  margin: 0px 12px 0px 0px;
  font-family: "Open Sans", sans-serif;
  word-wrap: normal;
  color: ${colors.darkGrey};
  text-transform: uppercase;
  letter-spacing: 3px;
  text-align: right;
  font-weight: 700;
`;

const StyledMark = styled.mark`
  background-color: ${colors.accentYellow};
  font-size: 12px;
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

// Design 3

const TitleText90 = styled.p`
  font-size: 36px;
  margin: 0px;
  font-family: "Open Sans", sans-serif;
  font-weight: bold;
  word-wrap: normal;
  text-align: left;
  line-height: 48px;
`;

const LargeCaps24 = styled.span`
  margin: 0px;
  font-family: "Open Sans", sans-serif;
  word-wrap: normal;
  text-align: left;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 48px;
  letter-spacing: 3px;
`;

const Subtitle20 = styled.span`
  margin-top: 32px;
  font-family: "Open Sans", sans-serif;
  word-wrap: normal;
  text-align: left;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 36px;
  letter-spacing: 1.5px;
`;

const Body2 = styled.p`
  font-size: 14px;
  line-height: 26px;
  margin: 0px;
  font-family: "Open Sans", sans-serif;
  word-wrap: normal;
  color: ${colors.black};
  letter-spacing: 1px;
  font-weight: normal;
`;

const BodyMain = styled.p`
  font-size: 14px;
  line-height: 30px;
  margin: 0px;
  font-family: "Open Sans", sans-serif;
  word-wrap: normal;
  color: ${colors.black};
  letter-spacing: 1px;
  font-weight: 600;
`;

const LargeSubtitle = styled.p`
  font-family: Open Sans;
  margin: 0px;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 48px;
  letter-spacing: 1.5px;
  color: ${colors.accentBlue};
`;

const NewDetailLeft = styled.p`
  font-size: 10px;
  font-family: "Open Sans", sans-serif;
  word-wrap: normal;
  color: ${colors.black};
  text-transform: uppercase;
  letter-spacing: 3px;
  text-align: left;
  font-weight: 600;
  margin-top: 48px;
`;

const GreySubtile = styled.p`
  font-family: "Open Sans", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 30px;
  color: ${colors.darkGrey};
  letter-spacing: 1.5px;
`;

export const typography = {
  ExtraLargeTitle: ExtraLargeTitle,
  LargeTitle: LargeTitle,
  SubTitle: SubTitle,
  SubTitleUnderline: SubTitleUnderline,
  AllCapsSubtitle: AllCapsSubtitle,
  Body: Body,
  NewTitle: NewTitle,
  NewLinks: NewLinks,
  NewHeading: NewHeading,
  NewBody: NewBody,
  NewDetail: NewDetail,
  NewBodyUnderline: NewBodyUnderline,
  NewBodyBold: NewBodyBold,
  TitleText90: TitleText90,
  LargeCaps24: LargeCaps24,
  Subtitle20: Subtitle20,
  StyledMark: StyledMark,
  Body2: Body2,
  LargeSubtitle: LargeSubtitle,
  NewDetailLeft: NewDetailLeft,
  BodyMain: BodyMain,
  GreySubtile: GreySubtile
};
