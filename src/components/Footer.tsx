import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { typography, colors } from "../styles";
import { animateScroll as scroll } from "react-scroll";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${colors.lightBlue};
  justify-content: flex-end;
`;

const scrollToTop = () => {
  scroll.scrollToTop();
};

export const Footer = () => {
  const history = useHistory();

  return (
    <Wrapper>
      <typography.NewLinks
        onClick={() => {
          history.push("/");
        }}
      >
        Home
      </typography.NewLinks>
      <typography.NewLinks onClick={scrollToTop}>
        Scroll To Top
      </typography.NewLinks>
    </Wrapper>
  );
};
