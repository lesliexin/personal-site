import React from "react";
import styled from "styled-components";
import { typography, device, containers } from "../styles";
import { SideNav } from "../components";

export const OutputPage = () => {
  return (
    <containers.PageContainer>
      <containers.ContentContainer>
        <typography.Bio>
          Here are a few of the many things that have shaped me.{" "}
        </typography.Bio>

        <SideNav />
      </containers.ContentContainer>
    </containers.PageContainer>
  );
};
