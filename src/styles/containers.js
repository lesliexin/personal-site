import styled from "styled-components";
import { device } from "./device";

const Top12 = styled.div`
  padding-top: 12px;
`;

const Top24 = styled.div`
  padding-top: 24px;
`;

const Top30 = styled.div`
  padding-top: 30px;
`;

const Top60 = styled.div`
  padding-top: 60px;
`;

const PageContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 160px;

  @media ${device.mobileM} {
    width: 90%;
    padding-top: 40px;
  }

  @media ${device.laptop} {
    width: 45%;
    padding-top: 160px;
  }
`;

const CardsContainer = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 10vh;
`;

const Overlap = styled.div`
  position: absolute;
  z-index: -10;
`;

export const containers = {
  PageContainer: PageContainer,
  ContentContainer: ContentContainer,
  CardsContainer: CardsContainer,
  Top12: Top12,
  Top24: Top24,
  Top30: Top30,
  Top60: Top60,
  Overlap: Overlap,
};
