import React from "react";
import styled from "styled-components";
import { typography } from "../styles";
import { SideNav } from "../components";

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

const LinksContainer = styled.div`
  display: flex;
  margin-top: 60px;
  flex-direction: row;
  justify-content: space-between;
`;

const TitleTextContainer = styled.div`
  width: 65%;
  margin-left: 60px;
`;

const BodyContainer = styled.div`
  margin-top: 30px;
`;

export const AboutPage = () => {
  return (
    <Container>
      <ContentContainer>
        <TitleTextContainer>
          <typography.NewTitle>It's nice to meet you.</typography.NewTitle>
          <BodyContainer>
            <typography.NewBody>
              I'm a software engineer with an affinity for design. It all
              started when I was accidentally placed in a computer science class
              in high school. Despite my apprehension, after 2 weeks of
              introductory python, I was hooked.
            </typography.NewBody>
          </BodyContainer>

          <BodyContainer>
            <typography.NewBody>
              From that first python program to now, I've thrown myself into the
              tech community. From
            </typography.NewBody>
            <typography.NewBodyLink
              href="https://uwblueprint.org/"
              target="_blank"
            >
              &nbsp;building software for non-profit organizations
            </typography.NewBodyLink>
            <typography.NewBody>, to</typography.NewBody>
            <typography.NewBodyLink
              href="https://www.facebook.com/techplusmp/"
              target="_blank"
            >
              &nbsp;mentoring students
            </typography.NewBodyLink>
            <typography.NewBody>, to </typography.NewBody>
            <typography.NewBodyLink
              href="https://www.youtube.com/watch?v=IyV5c_sd_4k"
              target="_blank"
            >
              &nbsp;humanizing internships
            </typography.NewBodyLink>
            <typography.NewBody>
              —I am passionate about giving back to the community that helped
              raise me.
            </typography.NewBody>
          </BodyContainer>

          <LinksContainer>
            <typography.NewLinksGrey
              href="https://github.com/lesliexin/"
              target="_blank"
            >
              code
            </typography.NewLinksGrey>
            <br />

            <typography.NewLinksGrey href="mailto:l6xin@uwaterloo.ca">
              email
            </typography.NewLinksGrey>
            <br />
            <typography.NewLinksGrey
              href="https://www.linkedin.com/in/lesliexin/"
              target="_blank"
            >
              linkedin
            </typography.NewLinksGrey>
            <br />
            <typography.NewLinksGrey
              href="https://twitter.com/Leslie_Xin"
              target="_blank"
            >
              twitter
            </typography.NewLinksGrey>
            <br />
            <typography.NewLinksGrey
              href="https://www.cbc.ca/player/play/1382926403834"
              target="_blank"
            >
              fun
            </typography.NewLinksGrey>
          </LinksContainer>
        </TitleTextContainer>
        <SideNav />
      </ContentContainer>
    </Container>
  );
};
