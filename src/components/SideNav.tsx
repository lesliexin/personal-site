import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { typography, device } from "../styles";

const LinksContainer = styled.div`
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
  const history = useHistory();

  return (
    <LinksContainer>
      <typography.NewLinks
        onClick={() => {
          history.push("/");
        }}
      >
        work
      </typography.NewLinks>
      <br />
      <typography.NewLinks
        onClick={() => {
          history.push("/about");
        }}
      >
        about
      </typography.NewLinks>
      <br />
      <typography.NewLinks href="/XinLeslie2022.pdf" target="_blank">
        résumé
      </typography.NewLinks>
    </LinksContainer>
  );
};
