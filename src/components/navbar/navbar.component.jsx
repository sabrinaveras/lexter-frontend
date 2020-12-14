import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";

import * as IoICons from "react-icons/io";
import * as HiIcons from "react-icons/hi";
import { IconContext } from "react-icons";

import { SidebarData} from "./sidebar.data";
import { NameNavbarData } from "./name-navbar.data";

import * as Styled from "./navbar.styles";

const NavbarComponent = ({history}) =>{

    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return (
        <>
            <IconContext.Provider value={{color: "#FFFFFF"}}>

                <Styled.Navbar>
                    <Styled.NavBarLink to={"#"}>
                        <HiIcons.HiMenuAlt1 onClick={showSidebar}/>
                    </Styled.NavBarLink>
                    {
                        NameNavbarData.filter((item) => item.path === history.location.pathname)
                            .map(name => (
                                <h1 key={name.key}>{name.title}</h1>
                            ))
                    }
                </Styled.Navbar>

                <Styled.NavMenu active={sidebar ? "active": null}>
                    <Styled.NavMenuItems onClick={showSidebar}>
                        <Styled.NavbarToggle>
                            <Styled.MenuBars to={"#"}>
                                <IoICons.IoIosClose/>
                            </Styled.MenuBars>
                        </Styled.NavbarToggle>
                        {
                            SidebarData.map((item, index) => {
                                return (
                                    <Styled.NavMenuItem key={index}>
                                        <Link to={item.path}>
                                            {item.icon}
                                            <span>{item.title}</span>
                                        </Link>
                                    </Styled.NavMenuItem>
                                )
                            })
                        }
                    </Styled.NavMenuItems>
                </Styled.NavMenu>

            </IconContext.Provider>
        </>
    )
}

export default withRouter(NavbarComponent);