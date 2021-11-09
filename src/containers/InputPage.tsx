import React from "react";
import styled from "styled-components";
import { typography, device, containers } from "../styles";
import { SideNav } from "../components";

export const InputPage = () => {
  return (
    <containers.PageContainer>
      <SideNav />
      <containers.ContentContainer>
        <containers.AboutContainer>
          <typography.Bio>
            Here are a few of the many things that have shaped me.{" "}
          </typography.Bio>
          <containers.Top60 />
          <typography.Description>
            This page is coming soon. Please visit again.
          </typography.Description>
        </containers.AboutContainer>
      </containers.ContentContainer>
    </containers.PageContainer>
  );
};
