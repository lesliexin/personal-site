import React from "react";
import styled from "styled-components";
import { typography, device, colors } from "../styles";

const LinksContainer = styled.nav`
  width: 15%;
  margin-left: auto;
  display: flex;
  flex-direction: column;
  padding: 10px 36px 0px 0px;

  @media ${device.mobileM} {
    padding: 10px 0px 0px 0px;
  }
`;

export const SideNav = () => {

  return (
    <LinksContainer>
      <typography.NewLinks
        exact to="/"
        activeStyle={{
          color: colors.accentColour
        }}
      >
        work
      </typography.NewLinks>
      <br />
      <typography.NewLinks
        to="/about"
        activeStyle={{
          color: colors.accentColour
        }}
      >
        about
      </typography.NewLinks>
      <br />
      <typography.NewLinks to="/LX2021.pdf" target="_blank">
        résumé
      </typography.NewLinks>
    </LinksContainer>
  );
};
