import React from "react";
import ItemEvent from "./Item";
import { VenueSession } from "./style";

const VunueNfo = () => {
    return (
        <VenueSession>
            <div className="wrapper">
                <ItemEvent delay={0}
                    icon={"/images/icons/calendar.png"}
                    title={"Event Date & Time"} time={"7 August 2022 @10.00 pm"} />
                <ItemEvent delay={500}
                    icon={"/images/icons/location.png"}

                    title={"Event Location"} time={"345 Speer Street Oakland, CA 9835"} />

            </div>
        </VenueSession>
    );
};

export default VunueNfo;
