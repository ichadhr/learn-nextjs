import { LucideIcon } from "lucide-react";

export interface ISideNav {
    Name: string;
    Path: string;
    Icon: LucideIcon;
    SubMenu?: ISubSideNav[];
}

export interface ISubSideNav {
    Name: string;
    Path: string;
}