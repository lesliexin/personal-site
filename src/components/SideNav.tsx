import React from "react";
import styled from "styled-components";
import { typography, device, colors } from "../styles";

const LinksContainer = styled.nav`
  width: 15%;
  display: flex;
  flex-direction: column;
  margin: 164px 0px 0px 160px;
  left: 0;
  top: 0;
  position: fixed;

  @media ${device.mobileM} {
    padding: 10px 0px 0px 0px;
  }
`;

export const SideNav = () => {
  return (
    <LinksContainer>
      <typography.NewLinks
        exact
        to="/"
        activeStyle={{
          color: colors.accentColour,
        }}
      >
        me
      </typography.NewLinks>
      <br />
      <typography.NewLinks
        to="/about"
        activeStyle={{
          color: colors.accentColour,
        }}
      >
        input
      </typography.NewLinks>
      <br />
      <typography.NewLinks
        to="/about"
        activeStyle={{
          color: colors.accentColour,
        }}
      >
        output
      </typography.NewLinks>
      {/* <typography.NewLinks to="/LX2021.pdf" target="_blank">
        resume
      </typography.NewLinks> */}
    </LinksContainer>
  );
};
