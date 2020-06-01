import styled from "styled-components";
import { colors } from "../styles";
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
  font-family: "Open Sans", sans-serif;
  font-size: ${subtitleText};
  word-wrap: normal;
  text-align: left;
`;

const SubTitleUnderline = styled.a`
  margin: 0px;
  font-family: "Open Sans", sans-serif;
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
  font-family: "Open Sans", sans-serif;
  font-size: ${medText};
  word-wrap: normal;
  text-align: left;
  text-transform: uppercase;
`;

const Body = styled.span`
  margin: 0px;
  font-family: "Open Sans", sans-serif;
  font-size: ${medText};
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
