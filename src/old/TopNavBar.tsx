import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../styles";
import { oldTypography } from "./oldTypography";

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
        <oldTypography.LargeTitle>lx.</oldTypography.LargeTitle>
      </NavLogo>
      <oldTypography.Body
        onClick={() => {
          history.push("/");
        }}
      >
        HOME
      </oldTypography.Body>
      <oldTypography.Body
        onClick={() => {
          history.push("/input");
        }}
      >
        ABOUT
      </oldTypography.Body>
    </Wrapper>
  );
};
