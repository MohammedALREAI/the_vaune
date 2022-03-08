import React from "react";
import Fade from "react-reveal";
import { FooterWrapper } from "./style";

const Footer = () => {
  return (
    <FooterWrapper>
      <Fade delay={500}>
        <h3 >The Venue</h3>
        <p className="footer_copyright">
          The venue  &nbsp; 2020 &nbsp; All &nbsp; &copy; rights reserved.
        </p>
      </Fade>
    </FooterWrapper >
  );
};

export default Footer;
