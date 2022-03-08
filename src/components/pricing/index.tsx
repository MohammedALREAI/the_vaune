import React, { Component } from "react";
import MyButton from "../utils/MyButton";
import Zoom from "react-reveal";
import { dataPrice } from "../utils/dammy";
import { PricingDescription, PricingItem, PricingTitle, PricingWrapper, SubWrapperPrice, WrapperPrice } from "./style";

const Pricing = () => {
    const showBoxes = () => {
        return dataPrice.prices.map((box, i) => (
            <Zoom delay={dataPrice.delay[i]} key={i}>
                <PricingItem>
                    <div className="pricing_inner_wrapper">
                        <PricingTitle>
                            <span>${dataPrice.prices[i]}</span>
                            <span>{dataPrice.positions[i]}</span>
                        </PricingTitle>
                        <PricingDescription>
                            {dataPrice.desc[i]}
                        </PricingDescription>
                        <div className="pricing_buttons">
                            <MyButton
                                text="Purchase"
                                bck="#ffa800"
                                color="#ffffff"
                                link={dataPrice.linkto[i]}
                            />
                        </div>
                    </div>
                </PricingItem>
            </Zoom >
        ));
    };

    return (
        <WrapperPrice>
            <SubWrapperPrice>
                {/* <h2>Pricing</h2> */}

                <PricingWrapper>
                    {showBoxes()}
                </PricingWrapper>

            </SubWrapperPrice>
        </WrapperPrice>
    );
};

export default Pricing;
