import styled from "styled-components";

export const HighlightWrapper = styled("div")`
    line-height: 30px;
    font-size: 18px;
    font-weight: 300;
    border-top: 1px solid #dddddd;
    border-bottom: 1px solid #dddddd;
    padding: 30px 0px;
    h2 {
        text-align: center;
        text-transform: uppercase;
        color: #2c2c2c;
        font-size: 3.25rem;
    }
`;
export const CenterWrapper = styled("div")`
    width: 50%;
    margin: 0 auto;

    h2 {
        font-size: 3.2rem;
    }

    div:first-child > p {
        font-size: 1.2rem;
    }
`;
export const DescriptionTitle = styled("div")`
    font-size: 1.2rem;
`;
export const DiscountWrapper = styled("div")`
    display: flex;
    padding: 4rem 0px;
    .discount_description h3 {
        font-size: 34px;
        font-weight: 100;
        margin: 0px;
        color: #2c2c2c;
    }
    .discount_description p {
        line-height: 30px;
        font-size: 18px;
        font-weight: 300;
    }
    @media (max-width: 1000px) {
        flex-direction: column;
        gap: 12px;
        justify-content: center;
        padding: 10px;
        margin: 0px auto;
    }
`;

export const DiscountPercentage = styled("div")`
    padding-right: 100px;
    span:nth-child(1) {
        color: #ff4800;
        font-size: 8rem;
        font-weight: 400;
        display: block;
        line-height: 6rem;
    }
    span:nth-child(2) {
        color: #2c2c2c;
        font-size: 3rem;
        font-weight: 400;
        display: block;
        margin-top: 0.5rem;
    }
`;

export const DiscountDescription = styled("div")`
    @media (max-width: 800px) {
        display: flex;
        flex-direction: column;
        gap: 12px;
        align-items: center;
        padding: 10px;
        margin: 0px auto;
        h3 {
            text-align: center;
        }
    }

    h3 {
        font-size: 1.3rem;
        font-weight: 100;
        margin: 0px;
        color: #2c2c2c;
    }
    p {
        font-weight: 300;
        line-height: 1.8rem;
        font-size: 1.1rem;
    }
`;
