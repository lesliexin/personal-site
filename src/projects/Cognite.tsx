import React from "react";
import { typography } from "../styles";
import styled from "styled-components";
import { ReactComponent as POC } from "../assets/v1.svg";
import { ReactComponent as UJM1 } from "../assets/UJM_adding.svg";
import { ReactComponent as UJM2 } from "../assets/UJM_investigating.svg";
import { ReactComponent as IA } from "../assets/IA.svg";
import OldIA from "../assets/oldIA.png";
import NewIA from "../assets/newIA.png";
import compArc from "../assets/compArc.png";

const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  align-content: center;
  overflow-x: hidden;
`;

const StyledPOC = styled(POC)`
  width: 100%;
`;

const StyledIA = styled(IA)`
  width: 100%;
`;

const StyledUJM1 = styled(UJM1)`
  width: 70%;
  margin: 0px;
`;

const HoriztonalScrollContainer = styled.div`
  width: 70%;
  overflow-x: scroll;
`;

const StyledUJM2 = styled(UJM2)``;

const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 55%;
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
          talk to our users face-to-face (even if that meant taking a flight{" "}
          <span role="img" aria-label="plane emoji">
            ✈️
          </span>
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
      </BodyContainer>
      <StyledPOC />
      <BodyContainer>
        {/*  Who are our users? */}
        <typography.NewDetailLeft>&nbsp;Process</typography.NewDetailLeft>
        <typography.LargeSubtitle>Who are our users?</typography.LargeSubtitle>
        <typography.Subtitle20>Primary users</typography.Subtitle20>
        <typography.BodyMain>
          The two primary users of AIR are first line engineers and data
          scientists. To better understand these users, I ran a workshop with
          our team plus a subject matter expert to gain deeper insight. During
          the workshop, we mapped out the pains, gains, and jobs of each user
          persona and then consolidated the main pain points we would focus on.
          From there, persona briefs were created for each primary user, which
          guided the development of more detailed user stories.
        </typography.BodyMain>
      </BodyContainer>

      <StyledPOC />
      <BodyContainer>
        <typography.Subtitle20>
          How does AIR fit into Cognite?
        </typography.Subtitle20>
        <typography.BodyMain>
          We then looked at Cognite’s persona library and discussed the scope of
          AIR with the other business application teams that served the same
          personas. Communication across teams is super important to identify
          how our products potentially overlap and how we can differentiate.
          Additionally, these discussions enabled us to collaborate on similar
          infrastructure elements and reusable frontend components.
        </typography.BodyMain>
      </BodyContainer>
      <StyledPOC />
      <BodyContainer>
        {/*  What are they frustrated with?  */}
        <typography.NewDetailLeft>&nbsp;Process</typography.NewDetailLeft>
        <typography.LargeSubtitle>
          What are they frustrated with?
        </typography.LargeSubtitle>
      </BodyContainer>
      <StyledUJM1 />
      <HoriztonalScrollContainer>
        <StyledUJM2 />
      </HoriztonalScrollContainer>

      <BodyContainer>
        {/*  Information Architecture */}
        <typography.NewDetailLeft>&nbsp;Process</typography.NewDetailLeft>
        <typography.LargeSubtitle>
          Information Architecture
        </typography.LargeSubtitle>
        <br />
        <typography.BodyMain>
          We did a design critique of the exisiting application with our team
          plus a subject matter expert. From the critique, we decided to focus
          on the 3 following areas:
        </typography.BodyMain>
      </BodyContainer>

      <StyledIA />

      <BodyContainer>
        <typography.Subtitle20>
          <span role="img" aria-label="plane emoji">
            🙁
          </span>
          Existing Information Architecture
        </typography.Subtitle20>

        <div>
          <img
            alt="Old IA"
            style={{
              margin: "40px 22px 28px 0px",
              width: "60%",
              float: "left"
            }}
            src={OldIA}
          />
          <typography.GreySubtile>What didn’t work:</typography.GreySubtile>
          <typography.BodyMain>
            • The information was too scattered
          </typography.BodyMain>
          <typography.BodyMain>
            • The links between the pages weren’t connected in a manner that
            reflected the users’ workflows
          </typography.BodyMain>
          <typography.BodyMain>
            • Certain tasks were spread across too many pages and included an
            unecessary number of steps
          </typography.BodyMain>
        </div>

        <typography.Subtitle20>
          <span role="img" aria-label="plane emoji">
            🙂
          </span>
          New Information Architecture
        </typography.Subtitle20>

        <div>
          <img
            alt="New IA"
            style={{
              margin: "60px 22px 28px 0px",
              width: "60%",
              float: "left"
            }}
            src={NewIA}
          />
          <typography.GreySubtile>
            How we made it better:
          </typography.GreySubtile>
          <typography.BodyMain>
            • Grouped important information under common parent pages allowing
            users to easily access what they needed without having to jump
            between screens.
          </typography.BodyMain>
          <typography.BodyMain>
            • Structured the flow of the pages in a way that was natural to the
            users’ workflows
          </typography.BodyMain>
          <typography.BodyMain>
            • Shortened the number of steps required to complete certain tasks,
            which helped make certain tasks seem less daunting and prevent
            information / context loss between pages.
          </typography.BodyMain>
        </div>
      </BodyContainer>

      <img
        alt="Component Architecture"
        style={{
          width: "100%"
        }}
        src={compArc}
      />

      <BodyContainer>
        {/* Areas of Focus */}
        <typography.NewDetailLeft>&nbsp;Introduction</typography.NewDetailLeft>
        <typography.LargeSubtitle>Areas of Focus</typography.LargeSubtitle>

        {/*  Wireframing */}
        <typography.NewDetailLeft>&nbsp;Introduction</typography.NewDetailLeft>
        <typography.LargeSubtitle>Wireframing</typography.LargeSubtitle>

        {/*  Wireframing */}
        <typography.NewDetailLeft>&nbsp;Introduction</typography.NewDetailLeft>
        <typography.LargeSubtitle>Code code code</typography.LargeSubtitle>
        <typography.Subtitle20>Architecture</typography.Subtitle20>
        <typography.BodyMain>
          The two primary users of AIR are first line engineers and data
          scientists. To better understand these users, I ran a workshop with
          our team plus a subject matter expert to gain deeper insight...
        </typography.BodyMain>
        <typography.Subtitle20>Data Contracts</typography.Subtitle20>
        <typography.BodyMain>
          The two primary users of AIR are first line engineers and data
          scientists. To better understand these users, I ran a workshop with
          our team plus a subject matter expert to gain deeper insight...
        </typography.BodyMain>
        <typography.Subtitle20>Components</typography.Subtitle20>
        <typography.BodyMain>
          The two primary users of AIR are first line engineers and data
          scientists. To better understand these users, I ran a workshop with
          our team plus a subject matter expert to gain deeper insight...
        </typography.BodyMain>
      </BodyContainer>
    </ContentContainer>
  );
};
