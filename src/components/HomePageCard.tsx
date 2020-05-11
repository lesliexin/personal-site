import React from "react";
import styled from "styled-components";
import colors from "../styles/colors";

const CardContainer = styled.div`
  height: 332px;
  background-color: ${colors.white};
  display: flex;
  margin: 200px 136px;
  justify-content: center;
`;

const CardImage = styled.div`
  width: 60%;
  background-color: ${colors.white};
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.12);
  border-radius: 16px;
`;

const CardText = styled.div`
  width: 40%;
`;

export const HomePageCard = () => {
  return (
    <CardContainer>
      <CardImage />
      <CardText>Text Text</CardText>
    </CardContainer>
  );
};
