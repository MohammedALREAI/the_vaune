import React, { Component } from "react";
import MyButton from "../utils/MyButton";
import Zoom from "react-reveal";
import { dataPrice } from "../utils/dammy";
import { SubWrapperPrice, WrapperPrice } from "./style";

class Pricing extends Component {
    showBoxes = () => {
         return dataPrice.prices.map((box, i) => (
            <Zoom delay={dataPrice.delay[i]} key={i}>
                <div className="pricing_item">
                    <div className="pricing_inner_wrapper">
                        <div className="pricing_title">
                            <span>${dataPrice.prices[i]}</span>
                            <span>{dataPrice.positions[i]}</span>
                        </div>
                        <div className="pricing_description">
                            {dataPrice.desc[i]}
                        </div>
                        <div className="pricing_buttons">
                            <MyButton
                                text="Purchase"
                                bck="#ffa800"
                                color="#ffffff"
                                link={dataPrice.linkto[i]}
                            />
                        </div>
                    </div>
                </div>
            </Zoom>
        ));
}

    render() {
        return (
            <WrapperPrice>
                <SubWrapperPrice>
                    {/* <h2>Pricing</h2> */}

                    <div className="pricing_wrapper">
                        {this.showBoxes()}
                    </div>

                </SubWrapperPrice>
            </WrapperPrice>
        );
    }
}

export default Pricing;
