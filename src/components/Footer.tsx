import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { fonts, colors } from "../styles";
import { animateScroll as scroll } from "react-scroll";

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

const scrollToTop = () => {
  scroll.scrollToTop();
};

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
      {/* <NavOption
        onClick={() => {
          history.push("/about");
        }}
      >
        About
      </NavOption> */}
      <NavOption onClick={scrollToTop}>Scroll To Top</NavOption>
    </Wrapper>
  );
};
