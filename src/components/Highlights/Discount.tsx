import React, { Component } from "react";
import { Fade, Slide } from "react-reveal";

import MyButton from "../utils/MyButton";
import { CenterWrapper, DiscountDescription, DiscountPercentage, DiscountWrapper } from "./style";

class Discount extends Component {
  state = {
    discountStart: 0,
    discountEnd: 30,
  };

  porcentage = () => {
    if (this.state.discountStart < this.state.discountEnd) {
      this.setState({
        discountStart: this.state.discountStart + 1,
      });
    }
  };

  componentDidUpdate() {
    setTimeout(() => {
      this.porcentage();
    }, 30);
  }

  render() {
    return (
      <CenterWrapper>
        <DiscountWrapper>
          <Fade onReveal={() => this.porcentage()}>
            <DiscountPercentage>
              <span>{this.state.discountStart}%</span>
              <span>OFF</span>
            </DiscountPercentage>
          </Fade>

          <Slide right>
            <DiscountDescription>
              <h3>Purchase tickets before 20th JUNE</h3>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo.
              </p>

              <MyButton
                text="Purchase tickets"
                bck="#ffa800"
                color="#ffffff"
                link="http://google.com"
              />
            </DiscountDescription>
          </Slide>
        </DiscountWrapper>
      </CenterWrapper>
    );
  }
}

export default Discount;
