import React, { useMemo } from 'react'
import { ISubSideNav } from "@/app/types/menu";
import { usePathname, useRouter } from 'next/navigation';

const SubMenuItems = ({ SubMenu }: { SubMenu: ISubSideNav }) => {

    const { Name, Path } = SubMenu;

    const router = useRouter();

    const OnClick = () => {
        router.push(Path);
    }

    const PathName = usePathname();

    const isActive = useMemo(() => {
        return Path === PathName;
    }, [Path, PathName]);

    return (
        <div className={`text-sm font-semibold cursor-pointer hover:text-sidenav-active ${isActive && 'text-sidenav-active'}`} onClick={OnClick}>{Name}</div>
    )
}

export default SubMenuItems