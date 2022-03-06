import React from "react";
import Fade from "react-reveal";
import { FooterWrapper } from "./style";

const Footer = () => {
  return (
    <FooterWrapper>
      <Fade delay={500}>
        <div >The Venue</div>
        <div className="footer_copyright">
          The venue 2018.All rights reserved.
        </div>
      </Fade>
    </FooterWrapper>
  );
};

export default Footer;
