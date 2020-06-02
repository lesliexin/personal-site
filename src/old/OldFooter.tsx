import React from "react";
import styled from "styled-components";
import { typography, colors } from "../styles";
import { animateScroll as scroll } from "react-scroll";

import { useHistory } from "react-router-dom";

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
  const history = useHistory();
  return (
    <Wrapper>
      <typography.NewLinks
        onClick={() => {
          history.goBack();
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
