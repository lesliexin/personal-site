import React from "react";
import { typography, containers } from "../styles";
import { SideNav, ContactLinksFooter } from "../components";

export const AboutPage = () => {
  return (
    <>
      <containers.PageContainer>
        <SideNav />
        <containers.ContentContainer>
          <containers.StyledTable>
            <containers.StyledRow>
              <containers.StyledData></containers.StyledData>
              <containers.StyledData>
                <typography.Heading>at the moment i'm</typography.Heading>
              </containers.StyledData>
            </containers.StyledRow>

            <containers.StyledRow>
              <containers.StyledData></containers.StyledData>
              <containers.StyledData>
                <typography.CompanyTitles>
                  Building collaborative commerce at &nbsp;
                </typography.CompanyTitles>
                <typography.NewBodyUnderline
                  href="https://blockchain.shopify.dev/"
                  target="_blank"
                >
                  Shopify
                </typography.NewBodyUnderline>
                <typography.CompanyTitles>
                  {" "}
                  with blockchain
                </typography.CompanyTitles>
              </containers.StyledData>
            </containers.StyledRow>

            <containers.StyledRow>
              <containers.StyledData></containers.StyledData>
              <containers.StyledData>
                <typography.Heading>
                  in the past i've worked at
                </typography.Heading>
              </containers.StyledData>
            </containers.StyledRow>

            {/* Twitter */}
            <containers.StyledRow>
              <containers.StyledData>
                <typography.NewDetail>2021</typography.NewDetail>
              </containers.StyledData>
              <containers.StyledData>
                <typography.CompanyTitles>Twitter </typography.CompanyTitles>
              </containers.StyledData>
            </containers.StyledRow>
            <containers.StyledRow>
              <containers.StyledData></containers.StyledData>
              <containers.StyledData>
                <typography.Description>
                  As a Design Engineer supporting design systems
                </typography.Description>
              </containers.StyledData>
            </containers.StyledRow>

            {/* Shopify */}
            <containers.StyledRow>
              <containers.StyledData>
                <typography.NewDetail>2020</typography.NewDetail>
              </containers.StyledData>
              <containers.StyledData>
                <typography.CompanyTitles>Shopify </typography.CompanyTitles>
              </containers.StyledData>
            </containers.StyledRow>
            <containers.StyledRow>
              <containers.StyledData></containers.StyledData>
              <containers.StyledData>
                <typography.Description>
                  As a Frontend Engineer improving user security
                </typography.Description>
              </containers.StyledData>
            </containers.StyledRow>

            {/* Cognite */}

            <containers.StyledRow>
              <containers.StyledData>
                <typography.NewDetail>2020</typography.NewDetail>
              </containers.StyledData>
              <containers.StyledData>
                <typography.CompanyTitles>Cognite </typography.CompanyTitles>
              </containers.StyledData>
            </containers.StyledRow>
            <containers.StyledRow>
              <containers.StyledData></containers.StyledData>
              <containers.StyledData>
                <typography.Description>
                  As a Frontend Engineer and Product Designer enabling engineers{" "}
                  to use data science
                </typography.Description>
              </containers.StyledData>
            </containers.StyledRow>

            {/* Microsoft */}
            <containers.StyledRow>
              <containers.StyledData>
                <typography.NewDetail>2019</typography.NewDetail>
              </containers.StyledData>
              <containers.StyledData>
                <typography.CompanyTitles>Microsoft</typography.CompanyTitles>
              </containers.StyledData>
            </containers.StyledRow>
            <containers.StyledRow>
              <containers.StyledData></containers.StyledData>
              <containers.StyledData>
                <typography.Description>
                  As a Software Engineer improving diagnostics visualization
                  tooling
                </typography.Description>
              </containers.StyledData>
            </containers.StyledRow>

            {/* Bungalow */}
            <containers.StyledRow>
              <containers.StyledData>
                <typography.NewDetail>2018</typography.NewDetail>
              </containers.StyledData>
              <containers.StyledData>
                <typography.CompanyTitles>Bungalow</typography.CompanyTitles>
              </containers.StyledData>
            </containers.StyledRow>
            <containers.StyledRow>
              <containers.StyledData></containers.StyledData>
              <containers.StyledData>
                <typography.Description>
                  As a Software Engineer reimagining the new applicant flow
                </typography.Description>
              </containers.StyledData>
            </containers.StyledRow>

            {/* CIBC */}
            <containers.StyledRow>
              <containers.StyledData>
                <typography.NewDetail>2018</typography.NewDetail>
              </containers.StyledData>
              <containers.StyledData>
                <typography.CompanyTitles>
                  CIBC Live Labs
                </typography.CompanyTitles>
              </containers.StyledData>
            </containers.StyledRow>
            <containers.StyledRow>
              <containers.StyledData></containers.StyledData>
              <containers.StyledData>
                <typography.Description margin="0">
                  As a Software Engineer enabling smart transactions through
                  Bitcoin wallets
                </typography.Description>
              </containers.StyledData>
            </containers.StyledRow>
            <containers.StyledRow>
              <containers.StyledData></containers.StyledData>
              <containers.StyledData>
                <typography.Heading>i communicate using</typography.Heading>
              </containers.StyledData>
            </containers.StyledRow>
            <containers.StyledRow>
              <containers.StyledData></containers.StyledData>
              <containers.StyledData>
                <containers.Columns>
                  <containers.VerticalList>
                    <typography.CompanyTitles>
                      Languages&nbsp;
                    </typography.CompanyTitles>
                    <typography.ListItems>JavaScript</typography.ListItems>
                    <typography.ListItems>TypeScript</typography.ListItems>
                    <typography.ListItems>HTML / CSS</typography.ListItems>
                    <typography.ListItems>Python</typography.ListItems>
                    <typography.ListItems>C++</typography.ListItems>
                    <typography.ListItems>Java</typography.ListItems>
                  </containers.VerticalList>
                  <containers.VerticalList>
                    <typography.CompanyTitles>
                      Tools&nbsp;
                    </typography.CompanyTitles>
                    <typography.ListItems>React</typography.ListItems>
                    <typography.ListItems>Next.js</typography.ListItems>
                    <typography.ListItems>Flask</typography.ListItems>
                    <typography.ListItems>Django</typography.ListItems>
                    <typography.ListItems>GraphQL</typography.ListItems>
                    <typography.ListItems>OpenGL</typography.ListItems>
                    <typography.ListItems>Postgres</typography.ListItems>
                    <typography.ListItems>MongoDB</typography.ListItems>
                    <typography.ListItems>Git</typography.ListItems>
                  </containers.VerticalList>
                  <containers.VerticalList>
                    <typography.CompanyTitles>
                      Design&nbsp;
                    </typography.CompanyTitles>
                    <typography.ListItems>Figma</typography.ListItems>
                    <typography.ListItems>Sketch</typography.ListItems>
                    <typography.ListItems>Invision</typography.ListItems>
                    <typography.ListItems>Procreate</typography.ListItems>
                  </containers.VerticalList>
                </containers.Columns>
              </containers.StyledData>
            </containers.StyledRow>
            <containers.StyledRow>
              <containers.StyledData></containers.StyledData>
              <containers.StyledData>
                <typography.Heading>
                  in the future i'd like to
                </typography.Heading>
              </containers.StyledData>
            </containers.StyledRow>
            <containers.StyledRow>
              <containers.StyledData></containers.StyledData>
              <containers.StyledData>
                <typography.CompanyTitles>
                  Continue to use technology as a means to create art. If you'd
                  like to work together, say hello at{" "}
                </typography.CompanyTitles>
                <typography.NewBodyUnderline
                  href="mailto:leslie.xin@hotmail.com"
                  target="_blank"
                >
                  leslie.xin@hotmail.com
                </typography.NewBodyUnderline>
              </containers.StyledData>
            </containers.StyledRow>
            <containers.Top60 />
            <ContactLinksFooter />
          </containers.StyledTable>
        </containers.ContentContainer>
      </containers.PageContainer>
    </>
  );
};
