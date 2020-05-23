import React, { useState, useEffect } from "react";
import { typography, padding } from "../styles";
import styled from "styled-components";
import colors from "../styles/colors";

const ContentContainer = styled.div`
  width: 100%;
  justify-content: center;
  flex-direction: column;
  display: flex;
`;

const BodyContainer = styled.div`
  width: 70%;
  padding-top: 50px;
  display: flex;
`;

const RowContainer = styled.div`
  width: 70%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const RowItem = styled.div`
  // width: 300px;
`;

export const Cognite = () => {
  return (
    <ContentContainer>
      <BodyContainer>
        <RowContainer>
          <RowItem>
            <typography.Subtitle20>What I did</typography.Subtitle20>
          </RowItem>
          <RowItem>
            <typography.Subtitle20>Who I worked with</typography.Subtitle20>
          </RowItem>
          <RowItem>
            <typography.Subtitle20>For how long</typography.Subtitle20>
          </RowItem>
        </RowContainer>
      </BodyContainer>
    </ContentContainer>
  );
};
