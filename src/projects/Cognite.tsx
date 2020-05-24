import React from "react";
import { typography } from "../styles";
import styled from "styled-components";
import { ReactComponent as POC } from "../assets/v1.svg";

const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  align-content: center;
`;

const StyledPOC = styled(POC)`
  width: 100%;
`;

const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 65%;
`;

const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const RowItem = styled.div`
  padding-top: 32px;
  width: 45%;
`;

export const Cognite = () => {
  return (
    <ContentContainer>
      <BodyContainer>
        {/*  Background */}
        <typography.NewDetailLeft>&nbsp;Introduction</typography.NewDetailLeft>
        <typography.LargeSubtitle>Background</typography.LargeSubtitle>
        <typography.Subtitle20>What is Cognite?</typography.Subtitle20>
        <typography.BodyMain>
          Cognite is an enterprise software company that serves customers in
          heavy-asset industries like power & utilities, oil & gas, and
          manufacturing. Their main product offering is Cognite Data Fusion
          (CDF) - software which contextualizes data at scale, enabling
          companies to get access to their data, make sense of it, and then use
          it to make meaningful decisions.
        </typography.BodyMain>
        <typography.Subtitle20>What is AIR?</typography.Subtitle20>
        <typography.BodyMain>
          On top of Cognite Data Fusion sits a handful of business applications,
          one of which is Automatic Identification and Reporting, more commonly
          known as AIR. AIR enables out-of-the-box use of data science models to
          detect and identify abnormal behaviour of equipment sensors.
        </typography.BodyMain>
        {/*  So, what's the problem? */}
        <typography.NewDetailLeft>&nbsp;Introduction</typography.NewDetailLeft>
        <typography.LargeSubtitle>
          So, what's the problem?
        </typography.LargeSubtitle>
        <br />
        <typography.BodyMain>
          When I joined the team, a proof of concept (POC) for AIR had just been
          completed. This POC was built in 3 months and was used to test
          technical feasibility and to gain some initial insight on customer
          interest. However, as the AIR was only in a POC state, the application
          was incredibly slow and had many usability issues. This was because
          this POC was developed using a lightweight prototyping framework with
          little design considerations.
        </typography.BodyMain>
      </BodyContainer>
      <StyledPOC />

      <BodyContainer>
        {/*  Overarching Goals */}
        <typography.NewDetailLeft>&nbsp;Introduction</typography.NewDetailLeft>
        <typography.LargeSubtitle>Overarching Goals</typography.LargeSubtitle>
        <RowContainer>
          <RowItem>
            <typography.Subtitle20>
              <span role="img" aria-label="hammer emoji">
                🛠
              </span>
              &nbsp;Re-Build
            </typography.Subtitle20>
            <typography.BodyMain>
              Start from scratch and re-make the entire AIR application using
              React.js and release the alpha version by the end of Q1
            </typography.BodyMain>
          </RowItem>
          <RowItem>
            <typography.Subtitle20>
              <span role="img" aria-label="thinking emoji">
                💭
              </span>
              &nbsp;Re-Imagine
            </typography.Subtitle20>
            <typography.BodyMain>
              Adopt a design-driven approach and improve the overall usability
              of the new application.
            </typography.BodyMain>
          </RowItem>
        </RowContainer>

        {/*  Getting up to speed */}
        <typography.NewDetailLeft>&nbsp;Process</typography.NewDetailLeft>
        <typography.LargeSubtitle>Getting up to speed</typography.LargeSubtitle>
        <typography.Subtitle20>Meeting our users</typography.Subtitle20>
        <typography.BodyMain>
          As AIR was a new project, we didn’t have a comprehensive understanding
          of our users and their workflows. The best solution to this was to
          talk to our users face-to-face (even if that meant taking a flight ✈
          ️to see them).
        </typography.BodyMain>
        <typography.Subtitle20>
          Talking to our stakeholders
        </typography.Subtitle20>
        <typography.BodyMain>
          After conducting user research interviews with our end users, we sat
          down with our stakeholders (the manager and VP of our org) to ensure
          that our team was aligned on the definition of success.
        </typography.BodyMain>
        <typography.Subtitle20>What we learned</typography.Subtitle20>
        <typography.BodyMain>
          End users sit in a horseshoe with large screens ...
        </typography.BodyMain>

        {/*  Who are our users? */}
        <typography.NewDetailLeft>&nbsp;Introduction</typography.NewDetailLeft>
        <typography.LargeSubtitle>Who are our users?</typography.LargeSubtitle>
        <StyledPOC />
        <BodyContainer>
          {/*  Who are our users? */}
          <typography.NewDetailLeft>&nbsp;Process</typography.NewDetailLeft>
          <typography.LargeSubtitle>
            Who are our users?
          </typography.LargeSubtitle>

          {/*  What are they frustrated with?  */}
          <typography.NewDetailLeft>&nbsp;Process</typography.NewDetailLeft>
          <typography.LargeSubtitle>
            What are they frustrated with?
          </typography.LargeSubtitle>

          {/*  Information Architecture */}
          <typography.NewDetailLeft>&nbsp;Process</typography.NewDetailLeft>
          <typography.LargeSubtitle>
            Information Architecture
          </typography.LargeSubtitle>
        </BodyContainer>
      </BodyContainer>
    </ContentContainer>
  );
};
