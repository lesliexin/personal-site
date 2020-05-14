import React from "react";
import styled from "styled-components";
import { typography } from "./styles";

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
  padding-top: 140px;
  width: 78%;
`;

const TitleTextContainer = styled.div`
  width: 85%;
`;

const LinksContainer = styled.div`
  width: 15%;
  margin-left: auto;
  display: flex;
  flex-direction: column;
  padding: 10px 36px 0px 0px;
`;

const StyledTable = styled.div`
  border-spacing: 0px;
  display: table;
`;

const StyledRow = styled.div`
  display: table-row;
`;

const StyledData = styled.div`
  height: 38px;
  display: table-cell;
`;

export const NewHomePage = () => {
  return (
    <>
      <Container>
        <ContentContainer>
          <TitleTextContainer>
            <StyledTable>
              <StyledRow>
                <StyledData></StyledData>
                <StyledData>
                  <typography.NewTitle>Hi, I'm Leslie!</typography.NewTitle>
                </StyledData>
              </StyledRow>

              <StyledRow>
                <StyledData></StyledData>
                <StyledData>
                  <typography.NewHeading>Currently</typography.NewHeading>
                </StyledData>
              </StyledRow>

              <StyledRow>
                <StyledData></StyledData>
                <StyledData>
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
                </StyledData>
              </StyledRow>

              <StyledRow>
                <StyledData></StyledData>
                <StyledData>
                  <typography.NewHeading>Previously</typography.NewHeading>
                </StyledData>
              </StyledRow>

              {/* Cognite */}

              <StyledRow>
                <StyledData>
                  <typography.NewDetail>2020</typography.NewDetail>
                </StyledData>
                <StyledData>
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
                </StyledData>
              </StyledRow>

              {/* Microsoft */}
              <StyledRow>
                <StyledData>
                  <typography.NewDetail>2019</typography.NewDetail>
                </StyledData>
                <StyledData>
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
                </StyledData>
              </StyledRow>

              {/* Bungalow */}
              <StyledRow>
                <StyledData>
                  <typography.NewDetail>2018</typography.NewDetail>
                </StyledData>
                <StyledData>
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
                </StyledData>
              </StyledRow>

              {/* CIBC */}
              <StyledRow>
                <StyledData>
                  <typography.NewDetail>2018</typography.NewDetail>
                </StyledData>
                <StyledData>
                  <typography.NewBody>
                    Enabling smart transactions through Bitcoin wallets at&nbsp;
                  </typography.NewBody>
                  <typography.NewBodyUnderline
                    href="https://medium.com/cibc-live-labs/about-live-labs-b8aebdd8815a"
                    target="_blank"
                  >
                    CIBC Live Labs
                  </typography.NewBodyUnderline>
                </StyledData>
              </StyledRow>

              {/* Blueprint */}
              <StyledRow>
                <StyledData>
                  <typography.NewDetail>2018 ></typography.NewDetail>
                </StyledData>
                <StyledData>
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
                </StyledData>
              </StyledRow>
            </StyledTable>
          </TitleTextContainer>
          <LinksContainer>
            <typography.NewLinks>code</typography.NewLinks>
            <br />
            <typography.NewLinks>resume</typography.NewLinks>
            <br />
            <typography.NewLinks>email</typography.NewLinks>
            <br />
            <typography.NewLinks>linkedin</typography.NewLinks>
            <br />
            <typography.NewLinks>fun</typography.NewLinks>
          </LinksContainer>
        </ContentContainer>
      </Container>
    </>
  );
};
