import React from "react";
import styled from "styled-components";
import { typography, containers, device } from "../styles";
import AA from "../assets/raytracer/antiAliasing.png";

const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  align-content: center;
  overflow-x: hidden;
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
  width: 15vw;
  margin-bottom: 20px;
`;

export const RayTracer = () => {
  return (
    <ContentContainer>
      <BodyContainer>
        {/*  Background */}
        <typography.NewDetailLeft>&nbsp;Introduction</typography.NewDetailLeft>
        <typography.LargeSubtitle>Crescend.io</typography.LargeSubtitle>
        <typography.Subtitle20>Purpose</typography.Subtitle20>
        <typography.BodyMain>
          Crescend.io is a computer game that leverages genetic algorithms and
          Processing to create a collaborative remote music creation tool for
          children and young adults. This creation was targeted toward kids and
          young adults who didn’t have access to music lessons due to limited
          resources, finances, and opportunity
        </typography.BodyMain>
        <typography.Subtitle20>Anti-aliasing</typography.Subtitle20>
        <typography.BodyMain>
          The next feature is anti-aliasing through supersampling, as seen in
          the image below. During sampling, errors are introduced, one of them
          being jaggies. Jaggies are the staircase, jagged pattern that appears
          near edges due to aliasing. To mitigate this, 4x4 supersampling was
          used to approximate the value of a pixel, by averaging the values of 4
          points within the pixel.
        </typography.BodyMain>
        <ImageContainer>
          <StyledImage alt="Anti aliasing" src={AA} />
        </ImageContainer>
      </BodyContainer>
    </ContentContainer>
  );
};
