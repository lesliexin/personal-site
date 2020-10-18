import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../../styles";
import { oldTypography } from "../oldTypography";

const NavWrapper = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  position: absolute;
  z-index: 20;
  width: 100%;
`;

const NavLogo = styled(NavLink)`
  padding-left: 5vh;
  margin-right: auto;
  cursor: pointer;
  text-decoration: none;
  &:focus, &:hover, &:visited, &:link, &:active {
    text-decoration: none;
  }
`;

const NavOption = styled(NavLink)`
  text-align: left;
  word-wrap: normal;
  cursor: pointer;
  text-decoration: none;
  color: ${colors.black};
  &:focus, &:hover, &:visited, &:link, &:active {
    text-decoration: none;
  }
  padding-right: 5vh;
`;

const NavOptions = styled.div`
  justify-content: flex-end;
  flex-direction: row;
  // padding-right: 5vh;
`;

export const TopNavBar = () => {

  return (
    <NavWrapper>
      <NavLogo
        exact to="/"
      >
        <oldTypography.LargeTitle>lx</oldTypography.LargeTitle>
      </NavLogo>
        <NavOption
          exact to="/"
          activeStyle={{
            color: colors.accentColour
          }}
        >
          <oldTypography.NavText>work</oldTypography.NavText>
        </NavOption>
        <NavOption
          to="/about"
          activeStyle={{
            color: colors.accentColour
          }}
        >
          <oldTypography.NavText>about</oldTypography.NavText>
        </NavOption>
        <NavOption
          to="/resume"
          activeStyle={{
            color: colors.accentColour
          }}
        >
          <oldTypography.NavText>resume</oldTypography.NavText>
        </NavOption>
    </NavWrapper>
  );
};
