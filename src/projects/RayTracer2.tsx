import React from "react";
import styled from "styled-components";
import { typography, containers, device, colors } from "../styles";
import { SideNav, ContactLinksFooter } from "../components";
// import AA from "../assets/raytracer/antiAliasing.png";

const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: left;
`;

const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 55%;

  @media ${device.mobileM} {
    width: 90%;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-around;
  margin: 60px 0 60px 0;
`;

const StyledImage = styled.img`
  width: 25vw;
  margin-bottom: 20px;
`;

const BackgroundBlue = styled.div`
  background-color: ${colors.lightBlue};
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  align-content: center;
  overflow-x: hidden;
  margin-top: 30px;
`;

export const RayTracer2 = () => {
  return (
    <containers.PageContainer>
      <SideNav />
      <containers.ContentContainer>
        <ContentContainer>
          <typography.NewDetailLeft>
            &nbsp;Introduction
          </typography.NewDetailLeft>
          <typography.LargeSubtitle>Crescend.io</typography.LargeSubtitle>
          <typography.Subtitle20>Purpose</typography.Subtitle20>
          <typography.BodyMain>
            The goal of this project was to deepen my knowledge of computer
            graphics engines through creating a ray-tracer. The main functions
            of a ray tracer are the following:
            <ul>
              <li>
                Cast primary rays from the eye position through every pixel in
                an image plane
              </li>
              <li>Intersect primary rays with scene geometry</li>
              <li>
                Cast shadow rays from intersection points to each light source
                and
              </li>
              <li>
                Use the gathered information to perform illumination
                calculations and choose a colour for the pixels associated with
                the primary rays
              </li>
            </ul>
          </typography.BodyMain>
        </ContentContainer>
      </containers.ContentContainer>
    </containers.PageContainer>
  );
};
