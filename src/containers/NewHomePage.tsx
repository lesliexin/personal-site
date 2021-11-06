import React, { useState } from "react";
import styled, { css } from "styled-components";
import { typography, containers } from "../styles";
import { useHistory } from "react-router-dom";
import { SideNav } from "../components";

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

export const NewHomePage = () => {
  const history = useHistory();

  return (
    <>
      <containers.PageContainer>
        <SideNav />
        <containers.ContentContainer>
          <StyledTable>
            <StyledRow>
              <StyledData></StyledData>
              <StyledData>
                <typography.NewLinks to="/">leslie xin</typography.NewLinks>{" "}
              </StyledData>
            </StyledRow>

            <containers.Top60 />
            <StyledRow>
              <StyledData></StyledData>
              <typography.Bio>
                I’m a design engineer interested in exploring and pushing the
                boundaries of our digital experiences.{" "}
              </typography.Bio>
            </StyledRow>

            <StyledRow>
              <StyledData></StyledData>
              <StyledData>
                <typography.Heading>at the moment i'm...</typography.Heading>
              </StyledData>
            </StyledRow>

            <StyledRow>
              <StyledData></StyledData>
              <StyledData>
                <typography.CompanyTitles>
                  Studying &nbsp;
                </typography.CompanyTitles>
                <typography.NewBodyUnderline
                  href="https://twitter.com/TwitterDesign?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
                  target="_blank"
                >
                  Systems Design Engineering
                </typography.NewBodyUnderline>
                <typography.CompanyTitles>
                  {" "}
                  a the Unversity of Waterloo
                </typography.CompanyTitles>
              </StyledData>
            </StyledRow>

            <StyledRow>
              <StyledData></StyledData>
              <StyledData>
                <typography.Heading>
                  which has led me to work at...
                </typography.Heading>
              </StyledData>
            </StyledRow>

            {/* Twitter */}
            <StyledRow>
              <StyledData>
                <typography.NewDetail>2021</typography.NewDetail>
              </StyledData>
              <StyledData>
                <typography.CompanyTitles>Twitter</typography.CompanyTitles>
              </StyledData>
            </StyledRow>
            <StyledRow>
              <StyledData></StyledData>
              <StyledData>
                <typography.Description>
                  Supported design systems
                </typography.Description>
              </StyledData>
            </StyledRow>

            {/* Shopify */}
            <StyledRow>
              <StyledData>
                <typography.NewDetail>2020</typography.NewDetail>
              </StyledData>
              <StyledData>
                <typography.CompanyTitles>Shopify</typography.CompanyTitles>
              </StyledData>
            </StyledRow>
            <StyledRow>
              <StyledData></StyledData>
              <StyledData>
                <typography.Description>
                  Improved user security
                </typography.Description>
              </StyledData>
            </StyledRow>

            {/* Cognite */}

            <StyledRow>
              <StyledData>
                <typography.NewDetail>2020</typography.NewDetail>
              </StyledData>
              <StyledData>
                <typography.CompanyTitles>Cognite</typography.CompanyTitles>
              </StyledData>
            </StyledRow>
            <StyledRow>
              <StyledData></StyledData>
              <StyledData>
                <typography.Description>
                  Enabled engineers to use data science
                </typography.Description>
              </StyledData>
            </StyledRow>

            {/* Microsoft */}
            <StyledRow>
              <StyledData>
                <typography.NewDetail>2019</typography.NewDetail>
              </StyledData>
              <StyledData>
                <typography.CompanyTitles>Microsoft</typography.CompanyTitles>
              </StyledData>
            </StyledRow>
            <StyledRow>
              <StyledData></StyledData>
              <StyledData>
                <typography.Description>
                  Improved diagnostics visualization tooling
                </typography.Description>
              </StyledData>
            </StyledRow>

            {/* Bungalow */}
            <StyledRow>
              <StyledData>
                <typography.NewDetail>2018</typography.NewDetail>
              </StyledData>
              <StyledData>
                <typography.CompanyTitles>Bungalow</typography.CompanyTitles>
              </StyledData>
            </StyledRow>
            <StyledRow>
              <StyledData></StyledData>
              <StyledData>
                <typography.Description>
                  Reimagined the new applicant flow
                </typography.Description>
              </StyledData>
            </StyledRow>

            {/* CIBC */}
            <StyledRow>
              <StyledData>
                <typography.NewDetail>2018</typography.NewDetail>
              </StyledData>
              <StyledData>
                <typography.CompanyTitles>
                  CIBC Live Labs
                </typography.CompanyTitles>
              </StyledData>
            </StyledRow>
            <StyledRow>
              <StyledData></StyledData>
              <StyledData>
                <typography.Description>
                  Enabled smart transactions through Bitcoin wallets
                </typography.Description>
              </StyledData>
            </StyledRow>
            <StyledRow>
              <StyledData></StyledData>
              <StyledData>
                <typography.Heading>where i learned...</typography.Heading>
              </StyledData>
            </StyledRow>
            <StyledRow>
              <StyledData></StyledData>
              <StyledData>
                <typography.Heading>
                  in the future i'd like to...
                </typography.Heading>
              </StyledData>
            </StyledRow>
            <StyledRow>
              <StyledData></StyledData>
              <StyledData>
                <typography.CompanyTitles>
                  continue to use technology as the means to create art. I hope
                  to build experiences that challenge conventional design and
                  induce feelings over utility.
                </typography.CompanyTitles>
              </StyledData>
            </StyledRow>
          </StyledTable>
        </containers.ContentContainer>
      </containers.PageContainer>
    </>
  );
};
