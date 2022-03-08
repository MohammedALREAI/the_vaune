import AppBar from "@mui/material/AppBar";
import styled from "styled-components";

export const AppBarCustom = styled(AppBar)<{ headerShow: boolean }>`
    /* background: ${(props) => (props.headerShow ? "#FFFFFF0D" : "#10000D")}; */
    box-shadow: none;
    background: #ffffff;
    padding: 10px 0px;
    transition: all 300ms ease-in;
`;

export const HeaderLogo = styled("div")`
    flex-grow: 1;
    color: #14161b;
    div:first-child {
        font-family: "Righteous", cursive;
        font-size: 40px;
        font-family: Urbanist;
        font-style: normal;
        font-weight: bold;
        font-size: 2.1rem;
        line-height: 1.4rem;
    }
    div:nth-child(2) {
        text-transform: uppercase;
    }
`;

export const FooterWrapper = styled("footer")`
    font-family: "Righteous", cursive;

    padding: 1rem 0px;
    text-align: center;
    font-size: 3rem;
    margin: 0px auto;

    font-family: Urbanist;
    font-style: normal;
    font-weight: bold;
    line-height: 1.8rem;
    justify-content: center;

    letter-spacing: -0.03em;

    color: #ffffff;

    background: #14161b;
    .footer_copyright {
        font-size: 18px;
        margin-top: 2px;
    }
`;
