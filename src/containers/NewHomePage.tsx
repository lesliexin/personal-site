import React, { useState } from "react";
import styled from "styled-components";
import { typography, containers } from "../styles";
import { ReactComponent as Wave } from "../assets/wave.svg";
import { useHistory } from "react-router-dom";
import { SideNav } from "../components";

const TitleTextContainer = styled.div`
  width: 85%;
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

const StyledWave = styled(Wave)`
  height: 38px;
`;

export const NewHomePage = () => {
  const [isTitleHover, setIsTitleHover] = useState(false);
  const history = useHistory();

  return (
    <>
      <containers.PageContainer>
        <containers.ContentContainer>
          <TitleTextContainer>
            <StyledTable>
              <StyledRow>
                <StyledData>{isTitleHover ? <StyledWave /> : null}</StyledData>
                <StyledData>
                  <typography.NewTitle
                    onMouseEnter={() => {
                      setIsTitleHover(!isTitleHover);
                    }}
                    onMouseLeave={() => {
                      setIsTitleHover(!isTitleHover);
                    }}
                  >
                    Hi, I'm Leslie!
                  </typography.NewTitle>
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
                  <typography.NewBody>Improving user security for merchants at &nbsp;</typography.NewBody>
                  <typography.NewBodyUnderline
                    href="https://www.shopify.com/"
                    target="_blank"
                  >
                    Shopify
                  </typography.NewBodyUnderline>
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
                    Building data science tools for engineers at&nbsp;
                  </typography.NewBody>
                  <typography.NewBodyUnderline
                    href="https://www.cognite.com/en/"
                    target="_blank"
                  >
                    Cognite
                  </typography.NewBodyUnderline>
                  <typography.NewBody>
                    &nbsp;in Oslo, Norway &nbsp;
                    <typography.StyledMark
                      onClick={() => {
                        history.push("/cognite");
                      }}
                    >
                      &nbsp;
                      <span role="img" aria-label="case emoji">
                        💼
                      </span>
                      case study here!&nbsp;
                    </typography.StyledMark>
                  </typography.NewBody>
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
          <SideNav />
        </containers.ContentContainer>
      </containers.PageContainer>
    </>
  );
};
