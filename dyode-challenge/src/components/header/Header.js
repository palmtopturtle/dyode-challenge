import React from "react";
import { Desktop, TabletAndBelow } from "../../utility/MediaQueries";
import logo from "../../assets/logo.png";
import { IconContext } from "react-icons";
import { CgMenu } from "react-icons/cg";
import { IoMdPerson, IoIosSearch } from "react-icons/io";
import { AiOutlineShoppingCart } from "react-icons/ai";

const collections = ["Men's", "Women's", "Accessories", "Sale!"]

const Header = () => 
    <header className="header">
        <IconContext.Provider value={{ color: "white", size: "28px"}}>
            <div className="header--left">
                <TabletAndBelow>
                    <CgMenu className="header--left__menu" />
                </TabletAndBelow>
                <img className="header--left__logo" src={logo} alt="Logo" />
            </div>
            <Desktop>
                <ul className="header--center">
                    {collections.map(title => 
                        <li key={title} className="header--center__collection">{title}</li>
                    )}
                </ul>
            </Desktop>
            <div className="header--right">
                <IoIosSearch className="header--right__search" />
                <IoMdPerson className="header--right__account" />
                <AiOutlineShoppingCart className="header--right__cart" />
            </div>
        </IconContext.Provider>
    </header>

export default Header;