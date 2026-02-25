import {
  LayoutGrid,
  BarChart3,
  Search,
  Info,
  type LucideIcon,
} from "lucide-react";

export interface NavItem {
  path: string;
  name: string;
  icon: LucideIcon;
}

export const NAV_ITEMS: NavItem[] = [
  { path: "/", name: "Home", icon: LayoutGrid },
  { path: "/sorting", name: "Sorting", icon: BarChart3 },
  { path: "/search", name: "Searching", icon: Search },
  { path: "/other", name: "Other", icon: Info },
];
