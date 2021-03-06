import styled from "styled-components";
import { device } from "./device";

const Top24 = styled.div`
  padding-top: 24px;
`;

const Top30 = styled.div`
  padding-top: 30px;
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
    width: 90%;
    padding-top: 40px;
  }

  @media ${device.laptop} {
    width: 78%;
    padding-top: 140px;
  }
`;

const Overlap = styled.div`
  position: absolute;
  z-index: -10;
`;

export const containers = {
  PageContainer: PageContainer,
  ContentContainer: ContentContainer,
  Top24: Top24,
  Top30: Top30,
  Overlap: Overlap,
};
