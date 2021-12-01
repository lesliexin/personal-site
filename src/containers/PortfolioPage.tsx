import React from "react";
import styled from "styled-components";
import { typography, containers } from "../styles";
import { SideNav, ProjectCard } from "../components";
import WaterworksPreview from "../assets/waterworks/wwPreview.png";

const ResponsiveCardContainer = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
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
          <typography.Heading>research</typography.Heading>
          <ResponsiveCardContainer>
            <ProjectCard
              image={WaterworksPreview}
              name="Quantum Storytelling"
              description="Using interactive digital storytelling to represent
              transformative quantum technologies in augmented/extended
              reality."
            />
          </ResponsiveCardContainer>
          <typography.Heading>projects</typography.Heading>
          <ResponsiveCardContainer>
            <ProjectCard
              image={WaterworksPreview}
              name="Waterworks"
              description="Interactive heatmap of where people have cried on the
                University of Waterloo campus"
            />
            <ProjectCard
              image={WaterworksPreview}
              name="Sounds of Home"
              description="Interactive audio visual experience
            inspired by missing home"
            />
            <ProjectCard
              image={WaterworksPreview}
              name="Stillae"
              description="Interactive audio visual experience
            inspired by missing home"
            />
            <ProjectCard
              image={WaterworksPreview}
              name="Hackathon Projects"
              description="A variety of projects created over the years"
            />
          </ResponsiveCardContainer>

          <typography.Heading>teaching</typography.Heading>
        </containers.AboutContainer>
      </containers.ContentContainer>
    </containers.PageContainer>
  );
};
