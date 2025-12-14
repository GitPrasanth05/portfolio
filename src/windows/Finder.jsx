import React from 'react'
import windowWrapper from "#higherorderComponent/WindowWrapper.jsx";
import {WindowControls} from "#components/index.js";
import {Search} from "lucide-react";
import {locations} from "#constants/index.js";
import useLocationStore from "#store/location.js";
import clsx from "clsx";
import useWindowStore from "#store/window.js";
// import windowStore from "#store/window.js";

const Finder = () => {
    const {openWindow} = useWindowStore();
    const openItem =(item)=>{
if(item.fileType === "pdf") return openWindow("resume");
    if(item.kind === "folder") return setActiveLocation(item)
        if(['fig' , 'url'].includes(item.fileType) && item.href) return window.open(item.href,"blank");
        if (item.fileType === "txt")
            return openWindow("txtfile", item);


        if (item.fileType === "img")
            return openWindow("imgfile", item);
    }

    const {activeLocation ,setActiveLocation} = useLocationStore();
    const renderT = (items)=> items.map((item)=>(
        <li key={item.id} onClick={()=>setActiveLocation(item)} className={clsx(item.id=== activeLocation.id ? "active" : "not-active")}>
            <img src={item.icon} alt={item.name} title={item.name} className="w-4 hov"  />
            <p className="text-sm font-medium ">{item.name}</p>
        </li>
    ))

    return <>
    <div id="window-header">
        <WindowControls target="finder" />
        <Search className="icon"/>
    </div>
        <div className="bg-white flex h-full">
            <div className="sidebar">
                <div>
                    <h3>Favorites</h3>
                    <ul>{renderT(Object.values(locations))}</ul>
                </div>
                <div>
                    <h3>Work</h3>
                    <ul>{renderT(locations.work.children)}</ul>
                </div>
            </div>
        <ul className="content">
            {activeLocation?.children.map((item)=>(
                <li key={item.id} className={item.position} onClick={()=> openItem(item)}>
                    <img src={item.icon} alt={item.name} className="hov" />
                    <p>{item.name}</p>
                </li>
            ))}
        </ul>
        </div>
    </>
}

const finderWindow = windowWrapper(Finder,"finder");
export default finderWindow;
