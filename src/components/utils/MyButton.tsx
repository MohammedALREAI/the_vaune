import React from "react";
import Button from "@mui/material/Button";

interface MyButtonProps {
    link: string,
    color: string,
    bck: string,
    text: string
}
const MyButton = (props: MyButtonProps) => {
    return (
        <Button
            href={props.link}
            variant="contained"
            size="small"
            style={{
                background: props.bck,
                color: props.color,
            }}
        >
            <img
                src={"/images/icons/ticket.png"}
                className="iconImage"
                alt="icon_button"
            />
            {props.text}
        </Button>
    );
};

export default MyButton;
