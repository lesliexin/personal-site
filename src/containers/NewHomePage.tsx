import React from "react";
import styled from "styled-components";
import { typography, containers } from "../styles";
import { SideNav, ContactLinksFooter, ProjectCard } from "../components";
import WaterworksPreview from "../assets/waterworks/waterworks.png";
import Soh from "../assets/soundsOfHome/soh.png";
import RayTracer from "../assets/raytracer/raytracer.png";
import Crescendio from "../assets/crescendio/crescendio.png";
import ShoeProject from "../assets/shoeProject.png";
import Cognite from "../assets/cognite.png";
import ReactWorkshop from "../assets/react.png";

const ProjectsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  align-content: center;
`;

const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: left;
  flex-direction: column;
`;

export const NewHomePage = () => {
  return (
    <>
      <containers.PageContainer>
        <SideNav />
        <containers.ContentContainer>
          <containers.StyledTable>
            <ProjectsContainer>
              <TitleContainer>
                <containers.StyledRow>
                  <containers.StyledData></containers.StyledData>
                  <containers.StyledData>
                    <typography.NewLinks to="/">leslie xin</typography.NewLinks>{" "}
                  </containers.StyledData>
                </containers.StyledRow>
                <containers.Top30 />
                <containers.StyledRow>
                  <containers.StyledData></containers.StyledData>
                  <typography.Bio>I’m a </typography.Bio>
                  <typography.StyledBio>design engineer</typography.StyledBio>
                  <typography.Bio>
                    {" "}
                    interested in exploring and pushing the boundaries of our
                    digital experiences.
                  </typography.Bio>
                </containers.StyledRow>
              </TitleContainer>
              <containers.Top60 />
              <containers.Top12 />
              <ProjectCard
                image={WaterworksPreview}
                name="Waterworks"
                description="Personal, 2021"
                tools="JavaScript, React, Python, Flask"
                link="http://waterworks.digital/"
                isExternal
              />
              <ProjectCard
                image={RayTracer}
                name="Real-time Ray Tracer"
                description="Personal, 2021"
                tools="C++"
                link="/raytracer"
              />
              <ProjectCard
                image={Soh}
                name="Sounds of Home"
                description="Personal, 2021"
                tools="Typescript, React"
                link="http://www.soundsofhome.ca/"
                isExternal
              />
              {/* <ProjectCard
            image={Soh}
            name="OpenGl Puppet"
            description="Personal, 2021"
            tools="C++, OpenGL"
            link="/"
          /> */}
              <ProjectCard
                image={ReactWorkshop}
                name="Introduction to React + Hooks Workshop"
                description="Hack the North & Bolt McGill, 2020"
                tools="JavaScript, React"
                link="https://github.com/lesliexin/intro-to-react-workshop"
                isExternal
              />
              <ProjectCard
                image={Cognite}
                name="Data Quality Monitoring"
                description="Cognite, 2020"
                tools="Typescript, React, Python, Firebase"
                link="/cognite"
              />
              <ProjectCard
                image={Crescendio}
                name="Crescend.io"
                description="Personal, 2020"
                tools="Processing, Java"
                link="/crescendio"
              />
              <containers.Top60 />
            </ProjectsContainer>
          </containers.StyledTable>
        </containers.ContentContainer>
      </containers.PageContainer>
    </>
  );
};
