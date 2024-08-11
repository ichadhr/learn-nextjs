

import { ISideNav } from "@/app/types/menu";
import { ChevronDown } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import React, { useMemo, useState } from 'react'

const MenuItems = ({ item }: { item: ISideNav }) => {
  const { Name, Icon: IconComponent, SubMenu, Path } = item;
  const [ Expanded, setExpanded ] = useState(false);

  const router = useRouter();

  const OnClick = () => {

    if (SubMenu && SubMenu.length > 0) {
      return setExpanded(!Expanded);
    }

    router.push(Path);
  };

  const PathName = usePathname();

  const isActive = useMemo(() => {
    return Path === PathName;
  }, [Path, PathName]);

  return (
    <>
      <div className={`flex items-center p-3 rounded-lg cursor-pointer justify-between text-sidenav-iconColor hover:text-sidenav-active hover:bg-sidenav-background ${isActive && 'text-sidenav-active bg-sidenav-background'}`} onClick={OnClick}>
        <div className="flex items-center space-x-2">
          <IconComponent size={20} />
          <p className='text-sm font-semibold'>{Name}</p>
        </div>
        {SubMenu && SubMenu.length > 0 && <ChevronDown size={18} 
        className={Expanded ? 'rotate-180 duration-200' : 'duration-200'}
        />}
      </div>
      {Expanded && <p>Expanded</p>}
    </>
  );
};

export default MenuItems