import React from "react";
import styled from "styled-components";
import { typography, containers, device, colors } from "../styles";
import AA from "../assets/raytracer/antiAliasing.png";
import GR from "../assets/raytracer/glossyReflection.png";
import GR2 from "../assets/raytracer/glossyRefraction02.png";
import SR from "../assets/raytracer/reflection2.png";
import SR2 from "../assets/raytracer/refraction02.png";
import SS from "../assets/raytracer/softShadows.png";
import DOF from "../assets/raytracer/depthOfField.png";

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

export const RayTracer = () => {
  return (
    <ContentContainer>
      <BodyContainer>
        {/*  Background */}
        <typography.NewDetailLeft>&nbsp;Introduction</typography.NewDetailLeft>
        <typography.LargeSubtitle>Background</typography.LargeSubtitle>
        <typography.Subtitle20>What's a ray tracer?</typography.Subtitle20>
        <typography.BodyMain>
          A ray-tracer is a computer program that traces the path of light rays
          as they bounce around a scene to create a final image, video, or
          interactive experience.
        </typography.BodyMain>

        <typography.Subtitle20>Purpose</typography.Subtitle20>
        <typography.BodyMain>
          The goal of this project was to deepen my knowledge of computer
          graphics engines through creating a ray-tracer. The main functions of
          a ray tracer are the following:
          <ul>
            <li>
              Cast primary rays from the eye position through every pixel in an
              image plane
            </li>
            <li>Intersect primary rays with scene geometry</li>
            <li>
              Cast shadow rays from intersection points to each light source and
            </li>
            <li>
              Use the gathered information to perform illumination calculations
              and choose a colour for the pixels associated with the primary
              rays
            </li>
          </ul>
        </typography.BodyMain>

        <typography.NewDetailLeft>&nbsp;Introduction</typography.NewDetailLeft>
        <typography.LargeSubtitle>Features</typography.LargeSubtitle>
        <typography.Subtitle20>Anti-aliasing</typography.Subtitle20>
        <typography.BodyMain>
          The next feature is anti-aliasing through supersampling, as seen in
          the image below. During sampling, errors are introduced, one of them
          being jaggies. Jaggies are the staircase, jagged pattern that appears
          near edges due to aliasing. To mitigate this, 4x4 supersampling was
          used to approximate the value of a pixel, by averaging the values of 4
          points within the pixel.
        </typography.BodyMain>
      </BodyContainer>
      <br />
      <StyledImage alt="Anti aliasing" src={AA} />

      <BodyContainer>
        <typography.Subtitle20>Glossy Reflection</typography.Subtitle20>
        <typography.BodyMain>
          The next feature in this project was glossy reflection, as shown in
          the image below. Extending on the regular reflection already
          implemented, glossy reflection was achieved through tracing multiple
          rays based on a uniform distribution and subsequently averaging the
          colour values
        </typography.BodyMain>
      </BodyContainer>
      <br />
      <StyledImage alt="Glossy reflection" src={GR} />

      <BodyContainer>
        <typography.Subtitle20>Specular Refraction</typography.Subtitle20>
        <typography.BodyMain>
          The third objective is specular refraction. Refraction was calculated
          using the surface normals, Snell’s law, and the respective indices of
          refraction of the two materials. The percentage of reflected light
          versus refracted light will be calculated using Fresnel’s equation
          [3]. Shown below is the scene in which the largest sphere has a 0.2
          refraction index.
        </typography.BodyMain>
      </BodyContainer>
      <br />
      <StyledImage alt="Specular Refraction" src={SR2} />

      <BodyContainer>
        <typography.Subtitle20>Glossy Refraction</typography.Subtitle20>
        <typography.BodyMain>
          Similarly to glossy reflection, glossy refraction was built upon
          regular refraction with the addition of secondary rays based on a
          uniform distribution and then finding the average. Shown below is the
          same scene as above with a refraction index of 0.2.
        </typography.BodyMain>
      </BodyContainer>
      <br />
      <StyledImage alt="Glossy Refraction" src={GR2} />

      <BodyContainer>
        <typography.Subtitle20>Soft shadows </typography.Subtitle20>
        <typography.BodyMain>
          The next feature was adding soft shadows as seen in the image below.
          This was done by adding area light sources instead of a single ray
          from a point light source. Similar to glossy reflection and refraction
          discussed earlier, this was implemented by sending multiple rays from
          the intersection point to a uniform distribution of points on the area
          light source. The resulting values were then averaged to create the
          soft shadows.
        </typography.BodyMain>
      </BodyContainer>
      <br />
      <StyledImage alt="Soft shadows" src={SS} />

      <BodyContainer>
        <typography.Subtitle20>Depth of Field</typography.Subtitle20>
        <typography.BodyMain>
          The last feature is depth of field. This was achieved by swapping the
          pinhole camera for a square camera lens. The depth of field is
          determined by the aperture and focal length variables which determines
          the focal point of where the light rays intersect with each other.
        </typography.BodyMain>
      </BodyContainer>
      <br />
      <StyledImage
        alt="Depth of Field
"
        src={SS}
      />
    </ContentContainer>
  );
};
