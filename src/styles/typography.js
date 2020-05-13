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

const NewTitle = styled.p`
  margin: 0px;
  font-size: 36px;
  padding-bottom: 6px;
  font-family: ${fonts.openSansBold};
  word-wrap: normal;
  text-align: left;
  color: ${colors.navy};
`;

const NewHeading = styled.p`
  font-size: 12px;
  margin: 24px 0px 10px 0px;
  font-family: ${fonts.openSansBold};
  word-wrap: normal;
  color: ${colors.darkGrey};
  text-transform: uppercase;
  letter-spacing: 3px;
`;

const NewLinks = styled.p`
  font-size: 12px;
  margin: 10px 0px;
  font-family: ${fonts.openSansBold};
  word-wrap: normal;
  color: ${colors.accentBlue};
  text-align: right;
  letter-spacing: 0.5px;
`;

const NewBody = styled.span`
  font-size: 16px;
  margin-bottom: 4px;
  font-family: ${fonts.openSansSemibold};
  word-wrap: normal;
  color: ${colors.navy};
  letter-spacing: 0.5px;
`;

const NewBodyUnderline = styled.a`
  font-size: 16px;
  margin-bottom: 4px;
  font-family: ${fonts.openSansBold};
  word-wrap: normal;
  color: ${colors.navy};
  border-bottom: 3px solid ${colors.accentBlue};
  cursor: pointer;
  text-decoration: none;
  letter-spacing: 0.5px;
`;

const NewDetail = styled.p`
  font-size: 10px;
  margin-right: 12px;
  font-family: ${fonts.openSansBold};
  word-wrap: normal;
  color: ${colors.darkGrey};
  text-transform: uppercase;
  letter-spacing: 3px;
  text-align: right;
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
  NewBodyUnderline: NewBodyUnderline
};
