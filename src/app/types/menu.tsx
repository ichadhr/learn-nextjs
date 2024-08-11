import { LucideIcon } from "lucide-react";

export interface ISideNav {
    Name: string;
    Path: string;
    Icon: LucideIcon;
    SubMenus?: ISubSideNav[];
}

export interface ISubSideNav {
    Name: string;
    Path: string;
}