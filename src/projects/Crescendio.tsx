import React from "react";
import styled from "styled-components";
import { typography, containers, device } from "../styles";
import C1 from "../assets/crescendio/c1.png";
import C2 from "../assets/crescendio/c2.png";
import C3 from "../assets/crescendio/c3.png";
import C4 from "../assets/crescendio/c4.png";
import C5 from "../assets/crescendio/c5.png";
import C6 from "../assets/crescendio/c6.png";
import C7 from "../assets/crescendio/c7.png";
import C8 from "../assets/crescendio/c8.png";
import C9 from "../assets/crescendio/c9.png";

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

export const Crescendio = () => {
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
        <ImageContainer>
          <StyledImage alt="screenshot of crescendio UI" src={C1} />
          <StyledImage alt="screenshot of crescendio UI" src={C2} />
          <StyledImage alt="screenshot of crescendio UI" src={C3} />
          <StyledImage alt="screenshot of crescendio UI" src={C4} />
          <StyledImage alt="screenshot of crescendio UI" src={C5} />
          <StyledImage alt="screenshot of crescendio UI" src={C6} />
          <StyledImage alt="screenshot of crescendio UI" src={C7} />
          <StyledImage alt="screenshot of crescendio UI" src={C8} />
          <StyledImage alt="screenshot of crescendio UI" src={C9} />
        </ImageContainer>
      </BodyContainer>
    </ContentContainer>
  );
};
