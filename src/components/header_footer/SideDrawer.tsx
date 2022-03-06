import React from "react";
import { scroller } from "react-scroll";

import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { ItemsSideBar } from "../../utils";

interface SlideDroweProps {
    open: boolean,
    onClose: (val: boolean) => void
}

const SideDrawer = (props: SlideDroweProps) => {
    const scrollToElement = (element: string) => {
        scroller.scrollTo(element, {
            duration: 1500,
            delay: 100,
            smooth: true,
            offset: -150,
        });
        props.onClose(false);
    };

    return (
        <Drawer anchor="right" open={props.open} onClose={() => props.onClose(false)}>
            <List component="nav">
                {ItemsSideBar.map((x, index) =>
                    <ListItem button key={index} onClick={() => scrollToElement(`${x.to}`)}>
                        {x.name}
                    </ListItem>,
                )}
            </List>
        </Drawer>
    );
};

export default SideDrawer;
