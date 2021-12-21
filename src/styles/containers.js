import styled from "styled-components";
import { device } from "./device";

const Top8 = styled.div`
  padding-top: 8px;
`;

const Top12 = styled.div`
  padding-top: 12px;
`;

const Top24 = styled.div`
  padding-top: 24px;
`;

const Top20 = styled.div`
  padding-top: 20px;
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

const StyledTable = styled.div`
  border-spacing: 0px;
  display: table;
`;

const StyledRow = styled.div`
  display: table-row;
`;

const StyledData = styled.div`
  height: 28px;
  display: table-cell;
`;

const VerticalList = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 52px;
`;

const Columns = styled.div`
  display: flex;
  flex-direction: row;
`;

const HorizontalLine = styled.div`
  border-top: 1px solid #dddddd;
  width: 100%;
`;

const AboutContainer = styled.div`
  padding-left: 44px;
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

const FooterColumns = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const containers = {
  PageContainer: PageContainer,
  ContentContainer: ContentContainer,
  CardsContainer: CardsContainer,
  StyledTable: StyledTable,
  StyledRow: StyledRow,
  StyledData: StyledData,
  VerticalList: VerticalList,
  AboutContainer: AboutContainer,
  Columns: Columns,
  Top8: Top8,
  Top12: Top12,
  Top24: Top24,
  Top30: Top30,
  Top60: Top60,
  Overlap: Overlap,
  HorizontalLine: HorizontalLine,
  FooterColumns: FooterColumns,
  Top20: Top20,
};
