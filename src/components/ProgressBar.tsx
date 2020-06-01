import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { colors } from "../styles";

const StyledBar = styled.div`
  position: fixed;
  background: linear-gradient(
    to right,
    ${colors.accentBlue} ${(props: { scroll: any }) => props.scroll},
    transparent 0
  );
  width: 100%;
  height: 4px;
  z-index: 3;
`;

export const ProgressBar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const listenToScrollEvent = () => {
    document.addEventListener("scroll", () => {
      requestAnimationFrame(() => {
        calculateScrollDistance();
      });
    });
  };

  const calculateScrollDistance = () => {
    const scrollTop = window.pageYOffset;
    const windowHeight = window.innerHeight;
    const docHeight = getDocHeight();

    const totalDocScrollLength = docHeight - windowHeight;
    const scrollPostion = Math.floor((scrollTop / totalDocScrollLength) * 100);
    setScrollPosition(scrollPostion);
  };

  const getDocHeight = () => {
    return Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.offsetHeight,
      document.body.clientHeight,
      document.documentElement.clientHeight
    );
  };

  useEffect(() => {
    listenToScrollEvent();
  });

  return <StyledBar scroll={scrollPosition + "%"} />;
};
