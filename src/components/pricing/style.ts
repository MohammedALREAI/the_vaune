import styled from "styled-components";

export const WrapperPrice = styled("div")`
    background: #ffffff;
    box-shadow: 4px 4px 60px rgba(99, 69, 237, 0.19);
    .pricing_buttons {
        text-align: center;
    }
`;
export const SubWrapperPrice = styled("div")`
    width: 900px;
    margin: 0 auto;
    padding: 70px 0px;
    .pricing_wrapper {
        display: flex;
        flex-wrap: wrap;
    }
`;

export const PricingItem = styled("div")`
    flex-grow: 1;
    width: 100%;
    padding: 20px;
    box-sizing: border-box;
`;

export const PricingWrapper = styled("div")`
    display: flex;
    flex-wrap: nowrap;
    align-items: space-between;
    gap: 20px;
    @media (max-width: 800px) {
        display: flex;
        flex-direction: column;
        gap: 12px;
        align-items: center;
        padding: 10px;
        margin: 0px auto;
    }
    .pricing_inner_wrapper {
        border: 1px solid rgba(99, 69, 237, 0.12);
        padding: 50px 20px;
    }
`;
export const PricingDescription = styled("div")`
    color: linear-gradient(132.71deg, #6345ed 18.12%, #dc39fc 81.74%);
    font-weight: 300;
    font-size: 14px;
    text-align: center;
    padding: 20px 0px;
    min-height: 70px;
`;

export const PricingTitle = styled("div")`
    color: #14161b;
    text-align: center;
    border-bottom: 1px solid rgba(99, 69, 237, 0.12);

    padding-bottom: 20px;
    span:nth-child(1) {
        font-size: 50px;
        display: block;
    }
    pan:nth-child(2) {
        text-transform: uppercase;
        font-size: 28px;
        font-weight: 300;
    }
`;
