import { AppLink } from "@/shared/ui/AppLink";

interface NavItem {
  id: string;
  label: string;
}

interface SubNavProps {
  items: NavItem[];
  basePath: string;
  activeId: string;
  disable: boolean;
}

export const SubNav = ({ items, basePath, activeId, disable }: SubNavProps) => {
  return (
    <div className="flex flex-wrap gap-2 mb-6 p-1.5 bg-slate-900/50 rounded-2xl border border-slate-800 w-fit">
      {items.map((item) => {
        const isActive = activeId === item.id;
        return (
          <AppLink
            key={item.id}
            to={`${basePath}/${item.id}`}
            variant={isActive ? "primary" : "secondary"}
            className={`px-4 py-2 rounded-xl text-sm transition-all ${isActive ? "shadow-md" : "hover:bg-slate-800/50"}`}
            disabled={disable}
          >
            {item.label}
          </AppLink>
        );
      })}
    </div>
  );
};
