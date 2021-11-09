import React from "react";
import styled from "styled-components";
import { typography, device, containers } from "../styles";
import { SideNav } from "../components";

const StyledList = styled.ul`
  padding-left: 20px;
`;

export const OutputPage = () => {
  return (
    <containers.PageContainer>
      <containers.ContentContainer>
        <containers.StyledTable>
          <containers.StyledRow>
            <containers.StyledData></containers.StyledData>
            <containers.StyledData>
              <typography.Bio>
                Here are a few of the things I've created and contributed to.{" "}
              </typography.Bio>
            </containers.StyledData>
          </containers.StyledRow>
          <containers.StyledRow>
            <containers.StyledData></containers.StyledData>
            <containers.StyledData>
              <typography.Heading>research</typography.Heading>
            </containers.StyledData>
          </containers.StyledRow>
          <containers.StyledRow>
            <containers.StyledData>
              <typography.NewDetail>2021</typography.NewDetail>
            </containers.StyledData>
            <containers.StyledData>
              <typography.TitleLinks
                href="https://tqt.uwaterloo.ca/project-details/using-interactive-digital-storytelling-to-represent-transformative-quantum-technologies-in-augmented-extended-reality-environments/"
                target="_blank"
              >
                Quantum Storytelling{" "}
              </typography.TitleLinks>
            </containers.StyledData>
          </containers.StyledRow>
          <containers.StyledRow>
            <containers.StyledData></containers.StyledData>
            <containers.StyledData>
              <typography.Description margin="8px">
                Using interactive digital storytelling to represent
                transformative quantum technologies in augmented/extended
                reality.
              </typography.Description>
              <typography.Description margin="0">
                Undergraduate research assistant working alongside Lulu Liu and
                Professor Lai-Tze Fan.
              </typography.Description>
            </containers.StyledData>
          </containers.StyledRow>
          <containers.StyledRow>
            <containers.StyledData></containers.StyledData>
            <containers.StyledData>
              <typography.Heading>projects</typography.Heading>
            </containers.StyledData>
          </containers.StyledRow>
          <containers.StyledRow>
            <containers.StyledData>
              <typography.NewDetail>2021</typography.NewDetail>
            </containers.StyledData>
            <containers.StyledData>
              <typography.TitleLinks
                href="http://waterworks.digital/"
                target="_blank"
              >
                Waterworks{" "}
              </typography.TitleLinks>
            </containers.StyledData>
          </containers.StyledRow>
          <containers.StyledRow>
            <containers.StyledData></containers.StyledData>
            <containers.StyledData>
              <typography.Description margin="8px">
                Created an interactive heatmap of where people have cried on the
                University of Waterloo campus.
              </typography.Description>
              <typography.Description>
                Collaborated with Queenie Wu.
              </typography.Description>
            </containers.StyledData>
          </containers.StyledRow>
          <containers.StyledRow>
            <containers.StyledData>
              <typography.NewDetail>2021</typography.NewDetail>
            </containers.StyledData>
            <containers.StyledData>
              <typography.TitleLinks
                href="http://www.soundsofhome.ca/"
                target="_blank"
              >
                Sounds of Home{" "}
              </typography.TitleLinks>
            </containers.StyledData>
          </containers.StyledRow>
          <containers.StyledRow>
            <containers.StyledData></containers.StyledData>
            <containers.StyledData>
              <typography.Description>
                Designed and developed an interactive audio visual experience
                inspired by missing home.
              </typography.Description>
            </containers.StyledData>
          </containers.StyledRow>
          <containers.StyledRow>
            <containers.StyledData>
              <typography.NewDetail>2021</typography.NewDetail>
            </containers.StyledData>
            <containers.StyledData>
              <typography.TitleLinks
                href="https://www.loolabs.org/"
                target="_blank"
              >
                LooLabs{" "}
              </typography.TitleLinks>
            </containers.StyledData>
          </containers.StyledRow>
          <containers.StyledRow>
            <containers.StyledData></containers.StyledData>
            <containers.StyledData>
              <typography.Description margin="8px">
                Built tools to support the University of Waterloo student
                community.
              </typography.Description>
              <typography.Description>
                Collaborated with the LooLabs team.
              </typography.Description>
            </containers.StyledData>
          </containers.StyledRow>
          <containers.StyledRow>
            <containers.StyledData>
              <typography.NewDetail>2021</typography.NewDetail>
            </containers.StyledData>
            <containers.StyledData>
              <typography.TitleLinks
                href="https://github.com/uwblueprint/shoe-project"
                target="_blank"
              >
                The Shoe Project{" "}
              </typography.TitleLinks>
            </containers.StyledData>
          </containers.StyledRow>
          <containers.StyledRow>
            <containers.StyledData></containers.StyledData>
            <containers.StyledData>
              <typography.Description margin="8px">
                Built an interactive data visualization map to share stories of
                Canadian immigrants.
              </typography.Description>
              <typography.Description>
                Collaborated with the UW Blueprint team.
              </typography.Description>
            </containers.StyledData>
          </containers.StyledRow>
          <containers.StyledRow>
            <containers.StyledData>
              <typography.NewDetail>2019</typography.NewDetail>
            </containers.StyledData>
            <containers.StyledData>
              <typography.TitleLinks
                href="https://www.cbc.ca/player/play/1382926403834"
                target="_blank"
              >
                Stillae
              </typography.TitleLinks>
            </containers.StyledData>
          </containers.StyledRow>
          <containers.StyledRow>
            <containers.StyledData></containers.StyledData>
            <containers.StyledData>
              <typography.Description margin="8px">
                Designed an atmospheric water generator using technology
                inspired by various elements in nature.
              </typography.Description>
              <StyledList>
                <li>
                  <typography.Description margin="8px">
                    Won 1st place in the Biomimiicry Global Design Challenge.
                  </typography.Description>
                </li>
                <li>
                  <typography.Description margin="8px">
                    Featured on the Inventors episode of David Suzuki's The
                    Nature of Things on CBC.
                  </typography.Description>
                </li>
                <li>
                  <typography.Description margin="8px">
                    Project will be featured in an exhbit at the Oregon Museum
                    of Science and Industry in 2023.
                  </typography.Description>
                </li>
              </StyledList>
            </containers.StyledData>
          </containers.StyledRow>
          <containers.StyledRow>
            <containers.StyledData></containers.StyledData>
            <containers.StyledData>
              <typography.Heading>teaching & mentorship</typography.Heading>
            </containers.StyledData>
          </containers.StyledRow>
          <containers.StyledRow>
            <containers.StyledData>
              <typography.NewDetail>2021</typography.NewDetail>
            </containers.StyledData>
            <containers.StyledData>
              <typography.TitleLinks
                href="https://github.com/lesliexin/intro-to-react-workshop"
                target="_blank"
              >
                Intro to React + Hooks Workshop
              </typography.TitleLinks>
            </containers.StyledData>
          </containers.StyledRow>
          <containers.StyledRow>
            <containers.StyledData></containers.StyledData>
            <containers.StyledData>
              <typography.Description margin="8px">
                Created an introductory React workshop that covers React
                fundamentals and hooks. Presented at the following events:
              </typography.Description>
              <StyledList>
                <li>
                  <typography.Description margin="8px">
                    Hack the North 2020+
                  </typography.Description>
                </li>
                <li>
                  <typography.Description margin="8px">
                    Bolt McGill 2021
                  </typography.Description>
                </li>
              </StyledList>
            </containers.StyledData>
          </containers.StyledRow>
          <containers.StyledRow>
            <containers.StyledData>
              <typography.NewDetail>2020</typography.NewDetail>
            </containers.StyledData>
            <containers.StyledData>
              <typography.TitleLinks
                href="https://www.techplusuw.org/"
                target="_blank"
              >
                Tech+ Mentorship
              </typography.TitleLinks>
            </containers.StyledData>
          </containers.StyledRow>
          <containers.StyledRow>
            <containers.StyledData></containers.StyledData>
            <containers.StyledData>
              <typography.Description>
                Mentored students in tech.
              </typography.Description>
            </containers.StyledData>
          </containers.StyledRow>
          <containers.StyledRow>
            <containers.StyledData>
              <typography.NewDetail>2019</typography.NewDetail>
            </containers.StyledData>
            <containers.StyledData>
              <typography.TitleLinks
                href="https://www.youtube.com/watch?v=IyV5c_sd_4k&ab_channel=16Weeks"
                target="_blank"
              >
                16 Weeks of Internships
              </typography.TitleLinks>
            </containers.StyledData>
          </containers.StyledRow>
          <containers.StyledRow>
            <containers.StyledData></containers.StyledData>
            <containers.StyledData>
              <typography.Description>
                Creating an online community to humanize the tech industry
              </typography.Description>
            </containers.StyledData>
          </containers.StyledRow>
          <containers.StyledRow>
            <containers.StyledData>
              <typography.NewDetail>2019</typography.NewDetail>
            </containers.StyledData>
            <containers.StyledData>
              <typography.TitleLinks
                href="https://open.spotify.com/episode/180Uvuh1hilgewVlsd4PK8?si=9rfBwWWMStm3TlT4n0OA3w"
                target="_blank"
              >
                College Daze Podcast
              </typography.TitleLinks>
            </containers.StyledData>
          </containers.StyledRow>
          <containers.StyledRow>
            <containers.StyledData></containers.StyledData>
            <containers.StyledData>
              <typography.Description margin="8px">
                Shared my thoughts on being in university and working in tech.
              </typography.Description>
              <typography.Description>
                Hosted by Samina Khaliq.
              </typography.Description>
            </containers.StyledData>
          </containers.StyledRow>
          <containers.Top60 />
        </containers.StyledTable>
        <SideNav />
      </containers.ContentContainer>
    </containers.PageContainer>
  );
};
