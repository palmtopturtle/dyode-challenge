import React from "react";
import hero4 from "../../assets/hero4.png"
import { TabletAndBelow, Desktop } from "../../utility/MediaQueries";
import Button from "../buttons/Button";

const FullImage = () => {
    return (
        <div className="full-image">
            <img className="full-image--image" src={hero4} alt="Woman sitting" />
            <Desktop>
                <div className="full-image--text__container">
                    <div className="full-image--text">
                        <div>
                            <h1 className="h1 maincarousel-text__heading full-image--text__heading">Our Favorite Tees</h1>
                            <h2 className="h2 maincarousel-text__subheading">Everyday tees you need.</h2>
                            <Button type="secondary" text="Shop Now" />
                        </div>
                    </div>
                </div>
            </Desktop>
            <TabletAndBelow>
                <div className="maincarousel-text--bottom">
                    <h1 className="h1 maincarousel-text__heading">Our Favorite Tees</h1>
                    <h2 className="h2 maincarousel-text__subheading">Everyday tees you need.</h2>
                    <Button type="primary" text="Shop Now" />
                </div>
            </TabletAndBelow>
        </div>
    )
}

export default FullImage;