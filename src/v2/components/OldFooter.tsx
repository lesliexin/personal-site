import React from "react";
import styled from "styled-components";
import { typography, colors } from "../../styles";
import { animateScroll as scroll } from "react-scroll";

const Wrapper = styled.div`
  display: flex;
  height: 20vh;
  flex-direction: row;
  background-color: ${colors.lightBlue};
  justify-content: center;
`;

const scrollToTop = () => {
  scroll.scrollToTop();
};

export const OldFooter = () => {
  return (
    <Wrapper>
      <typography.NewLinks
        exact to="/"
      >
        Home
      </typography.NewLinks>
      <typography.NewLinks 
        exact to="/"
        onClick={scrollToTop}>
        Scroll To Top
      </typography.NewLinks>
    </Wrapper>
  );
};
