import styled from "styled-components";

export const ArtistName = styled("div")`
    position: absolute;
    top: 50%;
    left: 50%;
    width: 400px;
    height: 160px;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    border: 2px solid white;

    div:first-child {
        border: 2px solid white;
        height: 121px;
        margin: 6px;
        text-align: center;
        color: #fff;
        font-size: 2.2rem;
        padding: 21px 70px 0px 70px;
        text-transform: uppercase;
    }
`;

export const CountdownWrapper = styled("div")`
    position: absolute;
    bottom: 0px;
    color: #ffffff;
    background: linear-gradient(130.35deg, #6345ed 17.35%, #dc39fc 78.23%);

    div:first-child {
        opacity: 0.8;
        border-bottom: 1px solid linear-gradient(130.35deg, #6345ed 17.35%, #dc39fc 78.23%);

        font-size: 19px;
        text-align: center;
        display: inline-block;

        text-transform: uppercase;
    }
`;

export const CountdownBottom = styled("div")`
    display: flex;
    justify-content: space-between;
    row-gap: 10px;
    padding: 10px 20px;
    border-right: 1px solid linear-gradient(130.35deg, #6345ed 17.35%, #dc39fc 78.23%);
    background: linear-gradient(130.35deg, #6345ed 17.35%, #dc39fc 78.23%);

    :last-child {
        border: none;
    }
`;
export const CountdownTime = styled("div")`
    font-size: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    :last-child {
        border: none;
    }
`;
export const CountdownItem = styled("div")`
    font-size: 70px;
    font-size: 19px;
    display: flex;
    flex-direction: column;
    text-transform: uppercase;
    :last-child {
        border: none;
    }
`;
export const CountdownTag = styled("div")`
    text-transform: uppercase;
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 7px;
`;
