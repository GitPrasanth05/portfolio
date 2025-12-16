import React from "react";
import { navIcons } from "#constants";
import dayjs from "dayjs";
import useWindowStore from "#store/window.js";
import { Moon, Sun } from "lucide-react";
import { toggleTheme } from "#utils/theme";
const data = [
  { id: 1, name: "Resume", type: "resume" },
  { id: 2, name: "Contact", type: "contact" },
  { id: 3, name: "Projects", type: "projects" },
];
const Navbar = () => {
  const { openWindow } = useWindowStore();
  return (
    <nav>
      <img src="/images/logo.svg" />
      <p className="font-bold"> Prasanth's Portfolio </p>
      <ul>
        {data.map(({ id, name, type }) => (
          <li key={id} onClick={() => openWindow(type)}>
            <p>{name}</p>
          </li>
        ))}
      </ul>
      <ul className="flex items-center gap-2">
        <li
          onClick={toggleTheme}
          className="p-1 rounded-md hover:bg-gray-200 dark:hover:bg-slate-800 cursor-pointer"
          title="Toggle theme"
        >
          <Sun className="block dark:hidden w-4 h-4" />
          <Moon className="hidden dark:block w-4 h-4" />
        </li>
      </ul>
      <ul>
        {navIcons.map(({ id, img }) => (
          <li key={id}>
            <img src={img} className="icon-hover" alt={`icon-${id}`} />
          </li>
        ))}
      </ul>
      <time>{dayjs().format("ddd MMM D h:mm A")}</time>
    </nav>
  );
};
export default Navbar;
