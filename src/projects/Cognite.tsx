import React, { useState, useEffect } from "react";
import { typography, padding } from "../styles";
import styled from "styled-components";
import colors from "../styles/colors";
import { type } from "os";

const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: row;
`;

const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 65%;
`;

export const Cognite = () => {
  return (
    <ContentContainer>
      <BodyContainer>
        {/*  Background */}
        <typography.NewDetailLeft>&nbsp;Introduction</typography.NewDetailLeft>
        <typography.LargeSubtitle>Background</typography.LargeSubtitle>

        {/*  So, what's the problem? */}
        <typography.NewDetailLeft>&nbsp;Introduction</typography.NewDetailLeft>
        <typography.LargeSubtitle>
          So, what's the problem?
        </typography.LargeSubtitle>
        <typography.Subtitle20>What is Cognite?</typography.Subtitle20>
        <typography.Subtitle20>What is AIR?</typography.Subtitle20>

        {/*  Overarching Goals */}
        <typography.NewDetailLeft>&nbsp;Introduction</typography.NewDetailLeft>
        <typography.LargeSubtitle>Overarching Goals</typography.LargeSubtitle>

        {/*  Getting up to speed */}
        <typography.NewDetailLeft>&nbsp;Introduction</typography.NewDetailLeft>
        <typography.LargeSubtitle>Getting up to speed</typography.LargeSubtitle>

        {/*  Who are our users? */}
        <typography.NewDetailLeft>&nbsp;Introduction</typography.NewDetailLeft>
        <typography.LargeSubtitle>Who are our users?</typography.LargeSubtitle>
      </BodyContainer>
    </ContentContainer>
  );
};
