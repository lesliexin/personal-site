import React from "react";
import styled from "styled-components";
import {colors} from "../styles";
import { typography, containers, device } from "../../styles";
import {TopNavBar} from "./TopNavBar";
import {oldTypography} from "../oldTypography";
import me from "../../assets/me.png";

const LinksContainer = styled.div`
  display: flex;
  margin-top: 60px;
  flex-direction: row;
  justify-content: space-between;

  @media ${device.mobileM} {
    flex-direction: column;
    align-items: left;
  }

  @media ${device.laptop} {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const TitleTextContainer = styled.div`
  width: 30%;
`;

const CenterContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 20vh;
`;

export const About = () => {
  return (
      <>
    <TopNavBar/>
    <containers.PageContainer>
      <CenterContainer>
        <TitleTextContainer>
          <oldTypography.LargeTitle>It's nice to meet you.</oldTypography.LargeTitle>
          <containers.Top30>
            <typography.NewBody>
              I'm a software engineer with an affinity for design. It all
              started when I was accidentally placed in a computer science class
              in high school. Despite my apprehension, after 2 weeks of
              introductory python, I was hooked.
            </typography.NewBody>
          </containers.Top30>

          <containers.Top30>
            <typography.NewBody>
              From that first python program to now, I've thrown myself into the
              tech community. From
            </typography.NewBody>
            <oldTypography.AboutBodyLink
              href="https://uwblueprint.org/"
              target="_blank"
            >
              &nbsp;building software for non-profit organizations
            </oldTypography.AboutBodyLink>
            <typography.NewBody>, to</typography.NewBody>
            <oldTypography.AboutBodyLink
              href="https://www.facebook.com/techplusmp/"
              target="_blank"
            >
              &nbsp;mentoring students
            </oldTypography.AboutBodyLink>
            <typography.NewBody>, to</typography.NewBody>
            <oldTypography.AboutBodyLink
              href="https://www.youtube.com/watch?v=IyV5c_sd_4k"
              target="_blank"
            >
              &nbsp;humanizing internships
            </oldTypography.AboutBodyLink>
            <typography.NewBody>
              —I am passionate about giving back to the community that helped
              raise me.
            </typography.NewBody>
          </containers.Top30>

          <LinksContainer>
            <oldTypography.AboutLinks
              href="https://github.com/lesliexin/"
              target="_blank"
            >
              code
            </oldTypography.AboutLinks>
            <br />

            <oldTypography.AboutLinks href="mailto:l6xin@uwaterloo.ca">
              email
            </oldTypography.AboutLinks>
            <br />
            <oldTypography.AboutLinks
              href="https://www.linkedin.com/in/lesliexin/"
              target="_blank"
            >
              linkedin
            </oldTypography.AboutLinks>
            <br />
            <oldTypography.AboutLinks
              href="https://twitter.com/Leslie_Xin"
              target="_blank"
            >
              twitter
            </oldTypography.AboutLinks>
          </LinksContainer>
        </TitleTextContainer>
        <img src={me} style={{
          width: "30%",
          height: "70%",
          marginLeft: "10vh",
          objectFit: "cover",
        }} alt="myself"/>
        {/* <oldTypography.LargeTitle>Budapest, 2020</oldTypography.LargeTitle> */}
      </CenterContainer>
    </containers.PageContainer>
    </>
  );
};
