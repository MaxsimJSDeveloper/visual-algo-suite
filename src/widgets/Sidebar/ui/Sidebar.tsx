import { NavLink } from "react-router";
import { NAV_ITEMS } from "../model/items";

export const Sidebar = () => {
  return (
    <aside className="w-64 h-screen bg-brand-card border-r border-slate-800 flex flex-col p-6 fixed left-0 top-0 z-50">
      <div className="mb-10 px-2 font-bold text-xl text-brand-accent">
        AlgoFruit Lab 🍎
      </div>

      <nav className="flex-1 space-y-2">
        {NAV_ITEMS.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300
              ${
                isActive
                  ? "bg-brand-accent/10 text-brand-accent border-r-2 border-brand-accent"
                  : "text-slate-400 hover:bg-slate-800 hover:text-slate-100"
              }`
            }
          >
            <item.icon size={20} />
            <span className="font-medium">{item.name}</span>
          </NavLink>
        ))}
      </nav>

      <div className="mt-auto p-2 text-[10px] text-slate-600 uppercase tracking-widest">
        Major 126 • Student Edition
      </div>
    </aside>
  );
};
