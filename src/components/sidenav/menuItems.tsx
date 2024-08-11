

import { ISideNav } from "@/app/types/menu";
import { ChevronDown } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import React, { useMemo } from 'react'

const MenuItems = ({ item }: { item: ISideNav }) => {
  const { Name, Icon: IconComponent, SubMenu, Path } = item;

  const router = useRouter();

  const OnClick = () => {
    router.push(Path);
  };

  const PathName = usePathname();

  const isActive = useMemo(() => {
    return Path === PathName;
  }, [Path, PathName]);

  return (
    <div className={`flex items-center p-3 hover:bg-sidenav-background rounded-lg cursor-pointer hover:text-sidenav-active justify-between text-sidenav-iconColor ${isActive && 'text-sidenav-active bg-sidenav-background'}`} onClick={OnClick}>
      <div className="flex items-center space-x-2">
        <IconComponent size={20} />
        <p className='text-sm font-semibold'>{Name}</p>
      </div>
      {SubMenu && SubMenu.length > 0 && <ChevronDown size={18} />}
    </div>
  );
};

export default MenuItems