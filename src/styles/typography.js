/**
 * @providesModule TextStyles
 */
import styled from "styled-components";
import fonts from "./fonts";
import colors from "./colors";
const extralargeText = "72px";
const largeText = "48px";
const subtitleText = "18px";

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

const SubTitleUnderline = styled.span`
  margin: 0px;
  font-family: ${fonts.openSansBold};
  font-size: ${subtitleText};
  word-wrap: normal;
  text-align: left;
  border-bottom: 3px solid ${colors.white};
`;

export const typography = {
  ExtraLargeTitle: ExtraLargeTitle,
  LargeTitle: LargeTitle,
  SubTitle: SubTitle,
  SubTitleUnderline: SubTitleUnderline
};
