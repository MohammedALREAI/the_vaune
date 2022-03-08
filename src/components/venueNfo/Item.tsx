import React from "react";
import { Zoom } from "react-reveal";
import { EventItemDescription, EventItemInner, EventItemOuter, EventItemTitle, EventItemWrapper } from "./style";

type Props = {
    delay: number,
    icon: string,
    title: string,
    time: string
}

export default function ItemEvent({ delay = 0, ...props }: Props) {
    return (

        <Zoom duration={500} delay={delay}>
            <EventItemWrapper>
                <EventItemOuter>
                    <EventItemInner>
                        <div className="vn_icon_square"></div>
                        <div
                            className="vn_icon"
                            style={{
                                background: `url(${props.icon})`,
                            }}
                        ></div>
                        <EventItemTitle>
                            {props.title}
                        </EventItemTitle>
                        <EventItemDescription>
                            {props.time}
                        </EventItemDescription>
                    </EventItemInner>
                </EventItemOuter>
            </EventItemWrapper>

        </ Zoom>
    );
}
