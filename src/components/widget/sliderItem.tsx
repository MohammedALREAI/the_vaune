import React from "react";
interface Props {
    image: string

}

export const SliderItem = (props: Props) => {
    return (
        <div
            className="carrousel_image"
            style={{
                background: `url(${props.image})`,
                height: `${window.innerHeight}px`,
                width: "100%",
                backgroundSize: "cover",
            }}>
        </div>
    );
};
