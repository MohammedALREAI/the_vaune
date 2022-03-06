import AppBar from "@mui/material/AppBar";
import styled from "styled-components";

export const AppBarCustom = styled(AppBar)<{ headerShow: boolean }>`
    background: ${(props) => (props.headerShow ? "#24AAE1" : "#10000D")};
    box-shadow: none;
    padding: 10px 0px;
    transition: all 300ms ease-in;
`;

export const HeaderLogo = styled("div")`
    flex-grow: 1;
    div:first-child {
        font-family: "Righteous", cursive;
        font-size: 40px;
    }
    div:nth-child(2) {
        text-transform: uppercase;
    }
`;

export const FooterWrapper = styled("footer")`
     font-family: 'Righteous', cursive;

padding: 50px 0px;
     text-align: center;
     font-size: 60px;
     color: #ffffff;
     background: #ff4800;
     .footer_copyright{
        font-size: 18px;

     }
`;
