import React from "react";
import { Search } from "lucide-react";
import WindowWrapper from "#higherorderComponent/WindowWrapper.jsx";
import { WindowControls } from "#components";
import { achievements } from "#constants";
import useWindowStore from "#store/window.js";

const Archive = () => {
    const { openWindow } = useWindowStore();

    return (
        <>
            <div id="window-header">
                <WindowControls target="archive" />
                <h2 className="font-bold text-sm text-center flex-1">ARCHIVE</h2>
                <Search className="icon text-gray-400" />
            </div>
            <div className="p-5 overflow-y-auto max-h-[70vh] bg-white">
                <ul className="grid grid-cols-3 gap-6">
                    {achievements.map((item) => (
                        <li
                            key={item.id}
                            className="group cursor-pointer select-none"
                            onClick={() =>
                                openWindow("imgfile", {
                                    name: item.title,
                                    imageUrl: item.image,
                                })
                            }
                        >
                            {/* IMAGE */}
                            <div className="aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden shadow-sm group-hover:shadow-md transition">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover group-hover:scale-[1.03] transition"
                                />
                            </div>

                            {/* META */}
                            <div className="mt-2 space-y-0.5">
                                <p className="text-sm font-semibold text-gray-800 truncate">
                                    {item.title}
                                </p>
                                <p className="text-xs text-gray-500 truncate">
                                    {item.result}
                                </p>
                                <p className="text-[11px] text-gray-400">
                                    {item.date}
                                </p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

const ArchiveWindow = WindowWrapper(Archive, "archive");
export default ArchiveWindow;
