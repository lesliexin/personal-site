import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { colors, typography } from "../styles";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${colors.lightBlue};
  justify-content: flex-end;
`;

const NavLogo = styled.div`
  padding: 32px;
  margin-right: auto;
  cursor: pointer;
`;

export const TopNavBar = () => {
  const history = useHistory();

  return (
    <Wrapper>
      <NavLogo
        onClick={() => {
          history.push("/");
        }}
      >
        <typography.LargeTitle>lx.</typography.LargeTitle>
      </NavLogo>
      <typography.NewLinks
        onClick={() => {
          history.push("/");
        }}
      >
        HOME
      </typography.NewLinks>
      <typography.NewLinks
        onClick={() => {
          history.push("/about");
        }}
      >
        ABOUT
      </typography.NewLinks>
    </Wrapper>
  );
};
