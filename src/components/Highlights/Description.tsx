import React from "react";
import { Fade } from "react-reveal";
import { CenterWrapper, DescriptionTitle } from "./style";

const Description = () => {
  return (
    <Fade>
      <CenterWrapper>
        <h2>Highlights</h2>
          <DescriptionTitle>

            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </DescriptionTitle>
      </CenterWrapper>
    </Fade>
  );
};

export default Description;
