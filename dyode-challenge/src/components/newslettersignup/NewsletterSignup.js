import React from "react";
import Button from "../buttons/Button";
import { IconContext } from "react-icons";
import { IoIosMail } from "react-icons/io";
import { useMediaQuery } from "react-responsive";

const NewsletterSignup = () => {
    const isDesktop = useMediaQuery({ query: "(min-width: 1280px)" })

    return (
        <div className="newsletter-signup--container">
            <div className="newsletter-signup">
                <h1 className="h1 newsletter-signup__heading"><IconContext.Provider value={{ color: "white", size: isDesktop ? "80px" : "40px" }}><IoIosMail className="newsletter-signup__heading--icon" /></IconContext.Provider>Sign Up &amp; Stay Connected</h1>
                <div className="newsletter-signup--subscribe">
                    <p className="newsletter-signup--subscribe__blurb">Sign up for the newsletter and get 20% off! Gain access to exclusive offers and be the first to know when new stuff drops!</p>
                    <input className="newsletter-signup--subscribe__input" placeholder="Enter Your Email Address"></input>
                    <Button type="outline" text="Subscribe" />
                </div>
            </div>
        </div>
    )
}
export default NewsletterSignup;