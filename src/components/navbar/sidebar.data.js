import * as HiIcons from "react-icons/hi";
import * as GoIcons from "react-icons/go";

export const SidebarData = [
    {
        title: "List All",
        path: "/",
        icon: <GoIcons.GoListUnordered/>,
        cName: "nav-text"
    },
    {
        title: "New Book",
        path: "/new-book",
        icon: <HiIcons.HiOutlineViewGridAdd/>,
        cName: "nav-text"
    }
]