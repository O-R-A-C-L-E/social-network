import React from 'react';
import {NavLink} from "react-router-dom";

const SideMenu = () => {
    return(
        <div className="side-menu">

            <ul className="side-menu__nav-list">
                <li className="side-menu__list-item">
                    <NavLink
                        to="/profile"
                        className="side-menu__link"
                        activeClassName="side-menu__link_active"
                    >
                        <span className="side-menu__link-text">Profile</span>
                    </NavLink>
                </li>

                <li className="side-menu__list-item">
                    <NavLink
                        to="/news"
                        className="side-menu__link"
                        activeClassName="side-menu__link_active"
                    >
                        <span className="side-menu__link-text">News</span>
                    </NavLink>
                </li>
                <li className="side-menu__list-item side-menu__list-item_disabled">
                    <span className="side-menu__link-text">Coming soon</span>
                </li>
            </ul>
        </div>
    )

};

export default SideMenu;