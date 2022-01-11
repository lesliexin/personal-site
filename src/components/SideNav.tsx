import React from "react";
import styled from "styled-components";
import { typography, device, colors } from "../styles";

const LinksContainer = styled.nav`
  width: 15%;
  display: flex;
  flex-direction: column;
  padding: 164px 0px 0px 160px;
  left: 0;
  top: 0;
  position: fixed;

  @media ${device.mobileM} {
    padding: 10px 0px 0px 0px;
    color: red;
    flex-direction: row;
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
          fontStyle: "italic",
        }}
      >
        output
      </typography.NewLinks>
      <br />
      <typography.NewNotLinks
        onClick={() => {
          window.open("https://www.learnlist.app/p/etqtJx", "_blank");
        }}
        activeStyle={{
          color: colors.accentColour,
        }}
      >
        input ↗
      </typography.NewNotLinks>
      <br />
      <typography.NewLinks
        to="/about"
        activeStyle={{
          color: colors.accentColour,
          fontStyle: "italic",
        }}
      >
        me
      </typography.NewLinks>
    </LinksContainer>
  );
};
