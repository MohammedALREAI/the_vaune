/* eslint-disable @typescript-eslint/ban-types */
import React, { useEffect, useState } from "react";

import Toolbar from "@mui/material/Toolbar";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";

import SideDrawer from "./SideDrawer";
import { AppBarCustom, HeaderLogo } from "./style";

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [headerShow, setHeaderShow] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setHeaderShow(true);
    } else {
      setHeaderShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleDrawer = (value: boolean) => {
    setDrawerOpen(value);
  };

  return (
    <AppBarCustom
      position="fixed"
      headerShow={headerShow}>
      <Toolbar>
        <HeaderLogo>
          <div>The Venue</div>
          <div>Musical Event</div>
        </HeaderLogo>

        <IconButton
          aria-label="Menu"
          color="inherit"
          onClick={() => toggleDrawer(true)}>
          <MenuIcon />
        </IconButton>

        <SideDrawer
          open={drawerOpen}
          onClose={(value:boolean) => toggleDrawer(value)}
        />
      </Toolbar>
    </AppBarCustom>
  );
};

export default Header;
