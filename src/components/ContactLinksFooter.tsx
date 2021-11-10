import React from "react";
import { typography, containers } from "../styles";

export const ContactLinksFooter = () => {
  return (
    <>
      <containers.StyledRow>
        <containers.StyledData></containers.StyledData>
        <containers.StyledData>
          <containers.HorizontalLine />
        </containers.StyledData>
      </containers.StyledRow>
      <containers.StyledRow>
        <containers.StyledData></containers.StyledData>
        <containers.StyledData>
          <containers.FooterColumns>
            <typography.ContactLinks href="/LX2021.pdf" target="_blank">
              resume
            </typography.ContactLinks>
            <typography.ContactLinks
              href="https://github.com/lesliexin"
              target="_blank"
            >
              github
            </typography.ContactLinks>
            <typography.ContactLinks
              href="https://twitter.com/lesliexin"
              target="_blank"
            >
              twitter
            </typography.ContactLinks>
            <typography.ContactLinks
              href="https://www.linkedin.com/in/lesliexin/"
              target="_blank"
            >
              linkedin
            </typography.ContactLinks>
          </containers.FooterColumns>
        </containers.StyledData>
      </containers.StyledRow>
      <containers.Top60 />
    </>
  );
};
