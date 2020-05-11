import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { fonts, colors, typography } from "../styles";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${colors.lightBlue};
  justify-content: flex-end;
`;

const NavOption = styled.div`
  padding: 32px;
  cursor: pointer;
  font-family: ${fonts.openSansBold};
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
      <NavOption
        onClick={() => {
          history.push("/");
        }}
      >
        HOME
      </NavOption>
      <NavOption
        onClick={() => {
          history.push("/about");
        }}
      >
        ABOUT
      </NavOption>
    </Wrapper>
  );
};
