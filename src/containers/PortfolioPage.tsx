import React from "react";
import styled from "styled-components";
import { typography, containers } from "../styles";
import { SideNav, ProjectCard } from "../components";
import WaterworksPreview from "../assets/waterworks/waterworks.png";
import Soh from "../assets/soundsOfHome/soh.png";
import RayTracer from "../assets/raytracer/raytracer.png";
import Crescendio from "../assets/crescendio/crescendio.png";
import ShoeProject from "../assets/shoeProject.png";
import Cognite from "../assets/cognite.png";
import ReactWorkshop from "../assets/react.png";

const ResponsiveCardContainer = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0;
`;

export const PortfolioPage = () => {
  return (
    <containers.PageContainer>
      <SideNav />
      <containers.ContentContainer>
        <containers.AboutContainer>
          <typography.Bio>
            Here are a few of the things I've created and contributed to.{" "}
          </typography.Bio>

          <containers.Top60 />

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
            description="University of Waterloo, 2021"
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
            description="University of Waterloo, 2020"
            tools="Processing, Java"
            link="/crescendio"
          />
          {/* <ProjectCard
            image={ShoeProject}
            name="The Shoe Project"
            description="UW Blueprint, 2019-2020"
            tools="Typescript, React, Go"
            link="https://map.theshoeproject.online/"
            isExternal
          /> */}
        </containers.AboutContainer>
      </containers.ContentContainer>
    </containers.PageContainer>
  );
};
