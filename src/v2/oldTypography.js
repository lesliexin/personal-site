import styled from "styled-components";
import { colors } from "../styles";
import { device } from "../styles";
const extremelylargeText = "68px";
const extraLargeText = "56px";
const largerText = "50px";
const largeText = "44px";
const mediumText = "32px";
const smallText = "20px";
const kindaSmallText = "18px";
const kindaSmallerText = "16px";
const extraSmallText = "14px";
const bold = 900;
const semiBold = 700;
const kindaBold = 600;
const medium = 500;
const regular = 400;

const ExtraLargeTitle = styled.p`
  font-size: ${extremelylargeText};
  font-family: 'Playfair Display', serif;
  margin: 0px;
  padding-bottom: 28px;
  font-weight: ${kindaBold};
  word-wrap: normal;
  text-align: center;
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
  font-family: 'Playfair Display', serif;
  font-weight: ${kindaBold};
  font-size: ${largerText};
  word-wrap: normal;
  text-align: left;
  width: 40vw;
  line-height: 60px;
  color: ${colors.black};
`;

const NavText = styled.span`
  margin: 0px;
  font-family: "Open Sans", sans-serif;
  font-weight: ${semiBold};
  font-size: ${extraSmallText};
  word-wrap: normal;
  text-align: right;
  line-height: 60px;
  text-transform: uppercase;
  letter-spacing: 2.5px;
`;

const SubTitle = styled.p`
  margin: 0px;
  font-size: ${kindaSmallText};
  word-wrap: normal;
  text-align: center;
`;

const CardLinks = styled.p`
  margin: 0px;
  font-family: "Open Sans", sans-serif;
  font-size: ${kindaSmallerText};
  word-wrap: normal;
  text-align: left;
  cursor: pointer;
  border-bottom: 1.5px solid;
  &:hover {
    color: ${colors.accentColor};
  }
`;

const CardButton = styled.p`
  margin: 0px;
  font-family: "Open Sans", sans-serif;
  font-size: ${kindaSmallerText};
  font-weight: ${kindaBold};
  word-wrap: normal;
  text-align: center;
  line-height: 28px;
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

const AllCapsSubtitle = styled.span`
  margin: 0px;
  font-family: "Open Sans", sans-serif;
  font-size: ${extraSmallText};
  word-wrap: normal;
  text-align: left;
  text-transform: uppercase;
  font-weight: ${semiBold};
  letter-spacing: 2px;
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
  CardLinks: CardLinks,
  NavText: NavText,
  CardButton: CardButton,
};
