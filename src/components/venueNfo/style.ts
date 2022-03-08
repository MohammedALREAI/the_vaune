import styled from "styled-components";
export const VenueSession = styled("section")`
    background: #ffffff;
    box-shadow: 4px 4px 60px rgba(99, 69, 237, 0.19);
    width: 100%;
    margin: 0 auto;
    .wrapper {
        padding: 90px 0px;
        width: 80%;
        margin: 0px auto;
        display: flex;
        gap: 20px;
        justify-content: space-between;
        @media (max-width: 800px) {
            display: flex;
            flex-direction: column;
            gap: 12px;
            align-items: center;
            padding: 10px;
            margin: 0px auto;
        }
    }
`;

export const EventItemOuter = styled("div")`
    width: 300px;
    border: 2px solid #828282;
    margin: auto;
    padding: 5px;
`;
export const EventItemInner = styled("div")`
    border: 2px solid #828282;
    position: relative;
    padding: 0px 20px;
    transition: all 500ms ease;
    :hover {
        background: #3e3e3e;
    }
`;

export const EventItemTitle = styled("h3")`
    font-size: 28px;
    margin: 90px 0px 20px 0px;
    border-bottom: 1px solid #5d5d5d;
    padding-bottom: 10px;
`;

export const EventItemDescription = styled("h3")`
    font-size: 30px;
    font-weight: 300;
    margin-bottom: 90px;
`;

export const EventItemWrapper = styled("div")`
    width: 100%;
    color: #14161b;
    display: flex;
    text-align: center;

    .vn_icon_square {
        width: 100px;
        height: 100px;
        position: absolute;
        -ms-transform: rotate(45deg);
        -webkit-transform: rotate(45deg);
        transform: rotate(45deg);
        top: -54px;
        left: 100px;
        background: linear-gradient(132.71deg, #6345ed 18.12%, #dc39fc 81.74%);
    }

    .vn_icon {
        width: 50px;
        height: 50px;
        background-size: contain !important;
        background-repeat: no-repeat !important;
        position: absolute;
        top: -30px;
        left: 124px;
    }
`;
