import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import fonts from "../styles/fonts";
import colors from "../styles/colors";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${colors.lightBlue};
  justify-content: flex-end;
`;

const NavOption = styled.div`
  padding: 32px;
  cursor: pointer;
  font-family: ${fonts.openSansBold};
`;

export const Footer = () => {
  const history = useHistory();

  return (
    <Wrapper>
      <NavOption
        onClick={() => {
          history.push("/");
        }}
      >
        Home
      </NavOption>
      <NavOption
        onClick={() => {
          history.push("/about");
        }}
      >
        About
      </NavOption>
    </Wrapper>
  );
};
