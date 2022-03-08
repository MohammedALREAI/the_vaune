import React from "react";
import Description from "./Description";
import Discount from "./Discount";
import { HighlightWrapper } from "./style";

const Highlights = () => {
  return (
    <HighlightWrapper>

      <Description />
      <Discount />
    </HighlightWrapper>
  );
};

export default Highlights;
