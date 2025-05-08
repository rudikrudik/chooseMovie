import React from "react";
import defaultImage from "../Images/default_card_image.jpg";

function DefaultCardImage(props) {

    return (
        <img src={props.data !== "N/A" ? props.data : defaultImage} alt="poster"/>
    )
}

export default DefaultCardImage;