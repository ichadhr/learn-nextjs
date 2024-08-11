import { ISideNav } from "@/app/types/menu";
import { ChevronDown } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import React, { useMemo, useState } from 'react'
import SubMenuItems from "./subMenus";

const MenuItems = ({ item }: { item: ISideNav }) => {
  const { Name, Icon: IconComponent, SubMenus, Path } = item;
  const [Expanded, setExpanded] = useState(false);

  const router = useRouter();

  const OnClick = () => {

    if (SubMenus && SubMenus.length > 0) {
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
      <div className={`flex items-center p-3 rounded-lg cursor-pointer justify-between hover:text-sidenav-active hover:bg-sidenav-background ${isActive && 'text-sidenav-active bg-sidenav-background'}`} onClick={OnClick}>
        <div className="flex items-center space-x-2">
          <IconComponent size={20} />
          <p className='text-sm font-semibold'>{Name}</p>
        </div>
        {SubMenus && SubMenus.length > 0 && <ChevronDown size={18}
          className={Expanded ? 'rotate-180 duration-200' : 'duration-200'}
        />}
      </div>
      {Expanded && SubMenus && SubMenus.length > 0 && (
        <div className="flex flex-col space-y-2 ml-10">
          {SubMenus.map((sub) => (
            <SubMenuItems key={sub.Path} SubMenu={sub} />
          ))}
        </div>
      )}
    </>
  );
};

export default MenuItems