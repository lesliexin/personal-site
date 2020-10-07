import React from "react";
import { useHistory, NavLink } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../../styles";
import { oldTypography } from "../oldTypography";

const NavWrapper = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

const NavLogo = styled(NavLink)`
  padding: 32px;
  margin-right: auto;
  cursor: pointer;
`;

const NavOption = styled(NavLink)`
  text-align: left;
  word-wrap: normal;
  cursor: pointer;
`;

export const TopNavBar = () => {
  const history = useHistory();

  return (
    <NavWrapper>
      <NavLogo
        exact to="/"
        activeStyle={{
          color: colors.accentColour
        }}
      >
        <oldTypography.LargeTitle>lx.</oldTypography.LargeTitle>
      </NavLogo>
      <NavOption
        exact to="/"
        activeStyle={{
          color: colors.accentColour
        }}
      >
        home
      </NavOption>
      <NavOption
        to="/about"
        activeStyle={{
          color: colors.accentColour
        }}
      >
        about
      </NavOption>
      <NavOption
        to="/resume"
        activeStyle={{
          color: colors.accentColour
        }}
      >
        resume
      </NavOption>
    </NavWrapper>
  );
};
