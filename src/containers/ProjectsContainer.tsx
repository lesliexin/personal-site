import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Cognite, Crescendio, RayTracer, projectContent } from "../projects";
import { Footer, BackButton } from "../components";
import { typography, device } from "../styles";
import styled, { css } from "styled-components";
import colors from "../styles/colours";
import CogniteTitle from "../assets/titleImages.png";
import CrescendioTitle from "../assets/crescendio/crescendioTitle.png";

const TitleContainer = styled.div<any>`
  height: 90vh;
  padding: 0px 0px 60px 80px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: ${colors.lightBlue};
  background-repeat: no-repeat;
  background-position: right 80%;
  background-size: 75%;

  ${(props: any) =>
    props.image &&
    css`
      background-image: url(${props.image});
    `};

  @media ${device.mobileM} {
    padding: 20px;
    background-repeat: no-repeat;
    background-position: center top 5%;
    background-size: 75%;
    height: 100vh;

    ${(props: any) =>
      props.image &&
      css`
        background-image: url(${props.image});
      `};
  }
`;

const TitleTextContainer = styled.div`
  width: 30%;

  @media ${device.mobileM} {
    width: 95%;
  }

  @media ${device.tablet} {
    width: 30%;
  }
`;

const CompanyName = styled.span`
  margin-bottom: 18px;
  font-family: "Open Sans", sans-serif;
  word-wrap: normal;
  text-align: left;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 48px;
  letter-spacing: 2px;
  text-transform: uppercase;
`;

const Role = styled.p`
  margin: 12px 0px 0px 0px;
  font-family: "Open Sans", sans-serif;
  word-wrap: normal;
  text-align: left;
  font-family: Open Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 1.5px;
  color: ${colors.headingColour};
`;

export const ProjectsContainer = () => {
  const [currentCompany, setCurrentCompany] = useState(projectContent.cognite);
  const location = useLocation().pathname;

  useEffect(() => {
    switch (location.substring(1, location.length)) {
      // case "raytracer": {
      //   setCurrentCompany(projectContent.raytracer);
      //   break;
      // }
      case "crescendio": {
        setCurrentCompany(projectContent.crescendio);
        break;
      }
      case "cognite": {
        setCurrentCompany(projectContent.cognite);
        break;
      }
      case "microsoft": {
        setCurrentCompany(projectContent.microsoft);
        break;
      }
      case "bungalow": {
        setCurrentCompany(projectContent.bungalow);
        break;
      }
      case "cibc": {
        setCurrentCompany(projectContent.cibc);
        break;
      }
      default: {
        setCurrentCompany(projectContent.cognite);
        break;
      }
    }
  }, [location]);

  let titleImage = CogniteTitle;
  let bodyContent = <Cognite />;
  switch (location.substring(1, location.length)) {
    case "cognite": {
      titleImage = CogniteTitle;
      bodyContent = <Cognite />;
      break;
    }
    case "crescendio": {
      titleImage = CrescendioTitle;
      bodyContent = <Crescendio />;
      break;
    }
    // case "raytracer": {
    //   titleImage = RayTracerTitle;
    //   bodyContent = <RayTracer />;
    //   break;
    // }
    default: {
      break;
    }
  }

  return (
    <>
      <TitleContainer image={titleImage}>
        <TitleTextContainer>
          <BackButton />
          <typography.NewDetailLeft>CASE STUDY</typography.NewDetailLeft>
          <typography.CaseTitle>
            {currentCompany.title1}
            <br /> {currentCompany.title2}
          </typography.CaseTitle>
          <CompanyName>{currentCompany.company}&nbsp;|&nbsp;</CompanyName>
          <CompanyName>{currentCompany.location}</CompanyName>
          <Role>Role</Role>
          {currentCompany.role.map((role) => (
            <typography.Body2>{role}</typography.Body2>
          ))}

          <Role>Team</Role>
          {currentCompany.team.map((person) => (
            <typography.Body2>{person}</typography.Body2>
          ))}

          <Role>Duration</Role>
          <typography.Body2>{currentCompany.duration}</typography.Body2>
        </TitleTextContainer>
      </TitleContainer>
      {bodyContent}
      <Footer />
    </>
  );
};
