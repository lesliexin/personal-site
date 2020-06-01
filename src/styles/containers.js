/**
 * @providesModule TextStyles
 */
import styled from "styled-components";
import { device } from "./device";

const Top24 = styled.div`
  padding-top: 24px;
`;

const PageContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: row;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 140px;

  @media ${device.mobileM} {
    width: 95%;
    padding-top: 30px;
  }

  @media ${device.laptop} {
    width: 78%;
    padding-top: 140px;
  }
`;

export const containers = {
  PageContainer: PageContainer,
  ContentContainer: ContentContainer,
  Top24: Top24,
};
