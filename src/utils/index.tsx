import { Items } from "../@types/interface";
import React from "react";
import Featured from "../components/featured";
import Highlights from "../components/Highlights";
import Pricing from "../components/pricing";
import VunueNfo from "../components/venueNfo";
import Location from "../components/location";

export const items: Array<Items> =
  [
    {
      name: "featured",
      component: <Featured />,
    },
    {
      name: "venuenfo",
      component: <VunueNfo />,
    },
    {
      name: "highlights",
      component: <Highlights />,
    },
    {
      name: "pricing",
      component: <Pricing />,
    },
    {
      name: "location",
      component: <Location />,
    },
  ];

export const ItemsSideBar = [
  {
    name: "Event starts in",
    to: "featured",
  },
  {
    name: "Venue NFO",
    to: "venuenfo",
  },
  {
    name: "Highlights",
    to: "highlights",
  },
  {
    name: "Pricing",
    to: "pricing",
  },
  {
    name: "Location",
    to: "location",
  },
];
