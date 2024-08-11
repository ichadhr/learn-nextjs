import React from 'react'
import { ISubSideNav } from "@/app/types/menu";

const SubMenuItems = ({ SubMenu } : { SubMenu: ISubSideNav }) => {
    
    const {Name} = SubMenu;

    return (
        <div>{Name}</div>
    )
}

export default SubMenuItems