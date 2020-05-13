import React from "react";
import styled from "styled-components";
import colors from "./styles/colors";
import { HomePageCard } from "./components";
import { typography, padding } from "./styles";
import blobs from "./assets/both-blobs-med.svg";
import { animateScroll as scroll } from "react-scroll";
import { ReactComponent as Chevron } from "./assets/chev-dark.svg";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: row;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 166px;
  width: 76%;
`;

const TitleTextContainer = styled.div`
  width: 75%;
`;

const LinksContainer = styled.div`
  width: 15%;
  margin-left: auto;
`;

const DateContainer = styled.div`
  margin-top: 200px;
  width: 15%;
  // margin-left: auto;
  // display: flex;
  // flex-direction: column;
  // align-items: baseline;
`;

const StyledTable = styled.table`
  border: none;
`;

const StyledRow = styled.tr`
  border: none;
`;

const StyledData = styled.td`
  border: none;
`;

export const NewHomePage = () => {
  return (
    <>
      <Container>
        <ContentContainer>
          {/* <DateContainer>
            <typography.NewDetail>2020</typography.NewDetail>
            <typography.NewDetail>2020</typography.NewDetail>
            <typography.NewDetail>2020</typography.NewDetail>
            <typography.NewDetail>2020</typography.NewDetail>
          </DateContainer> */}
          <TitleTextContainer>
            <typography.NewTitle>Hi, I'm Leslie!</typography.NewTitle>
            <typography.NewHeading>Currently</typography.NewHeading>
            <typography.NewBody>Studying&nbsp;</typography.NewBody>
            <typography.NewBodyUnderline
              href="https://uwaterloo.ca/systems-design-engineering/about-systems-design-engineering/what-systems-design-engineering"
              target="_blank"
            >
              Systems Design Engineering
            </typography.NewBodyUnderline>
            <typography.NewBody>
              &nbsp;at the University of Waterloo
            </typography.NewBody>
            <padding.Top24>
              <typography.NewHeading>Previously</typography.NewHeading>
              {/* Cognite */}
              <typography.NewBody>
                Designing and developing data science tools for engineers
                at&nbsp;
              </typography.NewBody>
              <typography.NewBodyUnderline
                href="https://www.cognite.com/en/"
                target="_blank"
              >
                Cognite
              </typography.NewBodyUnderline>
              <typography.NewBody>&nbsp;in Oslo, Norway</typography.NewBody>
              <br />

              {/* Microsoft */}
              <typography.NewBody>Improving&nbsp;</typography.NewBody>
              <typography.NewBodyUnderline
                href="https://docs.microsoft.com/en-us/power-platform/admin/admin-documentation"
                target="_blank"
              >
                Microsoft Power Platform's
              </typography.NewBodyUnderline>
              <typography.NewBody>
                &nbsp;diagnostics visualization tooling
              </typography.NewBody>
              <br />
              {/* Bungalow */}
              <typography.NewBody>
                Reimagining the new applicant flow at&nbsp;
              </typography.NewBody>
              <typography.NewBodyUnderline
                href="https://bungalow.com/"
                target="_blank"
              >
                Bungalow
              </typography.NewBodyUnderline>
              <typography.NewBody>&nbsp; (Atomic Labs)</typography.NewBody>
              <br />
              {/* CIBC */}
              <typography.NewBody>
                Enabling smart transactions through Bitcoin wallets at&nbsp;
              </typography.NewBody>
              <typography.NewBodyUnderline
                href="https://medium.com/cibc-live-labs/about-live-labs-b8aebdd8815a"
                target="_blank"
              >
                CIBC Live Labs
              </typography.NewBodyUnderline>
              <br />
              {/* Blueprint */}
              <typography.NewBody>
                Creating skill-building games for children with cognitive
                disabilities at&nbsp;
              </typography.NewBody>
              <typography.NewBodyUnderline
                href="https://uwblueprint.org/"
                target="_blank"
              >
                Blueprint
              </typography.NewBodyUnderline>
            </padding.Top24>
          </TitleTextContainer>
          <LinksContainer>
            <typography.NewLinks>code</typography.NewLinks>
            <typography.NewLinks>resume</typography.NewLinks>
            <typography.NewLinks>email</typography.NewLinks>
            <typography.NewLinks>linkedin</typography.NewLinks>
            <typography.NewLinks>fun</typography.NewLinks>
          </LinksContainer>
        </ContentContainer>
      </Container>
    </>
  );
};
