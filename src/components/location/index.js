import React from "react";

import styled from "styled-components";
const WrapperLocation = styled.div`
  position: relative;
`;
const TagLocation = styled.div`
  position: absolute;
  bottom: 0px;
  width: 100%;
  right: calc(-200px + 50%);
  background: #2c2c2c;
  color: #ffffff;
  text-transform: uppercase;
  width: 220px;
  margin: 0 auto;
  font-size: 29px;
  padding: 15px 20px;
  text-align: center;
`;
const loactionText = styled.div`
  background: #2c2c2c;
  color: #ffffff;
  text-transform: uppercase;
  width: 220px;
  margin: 0 auto;
  font-size: 29px;
  padding: 15px 20px;
  text-align: center;
`;

const Location = () => {
  return (
    <WrapperLocation>
      <iframe
        title="myMap"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63499.5759094865!2d-96.82638045433593!3d32.81400551924428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e993d0ea3c1ff%3A0x1859d2cc74f588e2!2sThe+Dallas+World+Aquarium!5e0!3m2!1ses!2sar!4v1530636115082"
        width="100%"
        height="500px"
        frameBorder="0"
        allowFullScreen></iframe>

      <TagLocation>
        <loactionText>Location</loactionText>
      </TagLocation>
    </WrapperLocation>
  );
};

export default Location;
