import React from "react";
import Carrousel from "./Carrousel";
import { ArtistName } from "./style";
import TimeUntil from "./TimeUntil";

const Featured = () => {
    return (
        <div style={{ position: "relative" }}>

            <Carrousel />

            <ArtistName>
                <div>
                    Ariana Grande
                </div>
            </ArtistName>
            <TimeUntil />
        </div>
    );
};

export default Featured;
