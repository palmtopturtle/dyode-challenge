import React from "react";
import Accordion from "../accordion/Accordion";
import { IconContext } from "react-icons";
import { RiFacebookFill } from "react-icons/ri";
import { IoLogoInstagram, IoLogoTwitter } from "react-icons/io";
import { Desktop, TabletAndBelow } from "../../utility/MediaQueries";

const Footer = () => {
    return (
        <footer className="footer--container">
            <div className="footer">
                <TabletAndBelow>
                    <Accordion title="Customer Service">
                        <ul className="footer__section">
                            <li className="footer__section__item">Accessibility</li>
                            <li className="footer__section__item">Contact Us</li>
                            <li className="footer__section__item">Return Policy</li>
                            <li className="footer__section__item">FAQ</li>
                            <li className="footer__section__item">Gift Certificates</li>
                            <li className="footer__section__item">Wishlist</li>
                        </ul>
                    </Accordion>
                    <Accordion title="Company">
                        <ul className="footer__section">
                            <li className="footer__section__item">About Us</li>
                            <li className="footer__section__item">Careers</li>
                            <li className="footer__section__item">Press</li>
                            <li className="footer__section__item">Affiliates</li>
                        </ul>
                    </Accordion>
                    <p className="footer__title">Follow Us</p>
                    <ul className="footer__section footer__section--media">
                        <IconContext.Provider value={{ color: "white", size: "32px"}}>
                            <li className="footer__section__icon"><RiFacebookFill /></li>
                            <li className="footer__section__icon"><IoLogoInstagram /></li>
                            <li className="footer__section__icon"><IoLogoTwitter /></li>
                        </IconContext.Provider>
                    </ul>
                </TabletAndBelow>
                <Desktop>
                    <div className="footer__left">
                        <div className="footer__section--container">
                            <p className="footer__title">Customer Service</p>
                            <ul className="footer__section">
                                <li className="footer__section__item">Accessibility</li>
                                <li className="footer__section__item">Contact Us</li>
                                <li className="footer__section__item">Return Policy</li>
                                <li className="footer__section__item">FAQ</li>
                                <li className="footer__section__item">Gift Certificates</li>
                                <li className="footer__section__item">Wishlist</li>
                            </ul>
                        </div>
                        <div className="footer__section--container">
                            <p className="footer__title">Company</p>
                            <ul className="footer__section">
                                <li className="footer__section__item">About Us</li>
                                <li className="footer__section__item">Careers</li>
                                <li className="footer__section__item">Press</li>
                                <li className="footer__section__item">Affiliates</li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer__right">
                        <div className="footer__section--container">
                            <p className="footer__title">Follow Us</p>
                            <ul className="footer__section footer__section--media">
                                <IconContext.Provider value={{ color: "white", size: "32px"}}>
                                    <li className="footer__section__icon"><RiFacebookFill /></li>
                                    <li className="footer__section__icon"><IoLogoInstagram /></li>
                                    <li className="footer__section__icon"><IoLogoTwitter /></li>
                                </IconContext.Provider>
                            </ul>  
                        </div> 
                    </div>               
                </Desktop>
            </div>
        </footer>
    )
}

export default Footer;