import React from 'react'
// import WindowWrapper from "#higherorderComponent/WindowWrapper.jsx";
import WindowWrapper from "#higherorderComponent/WindowWrapper.jsx";
import {techStack} from "#constants/index.js";
import { Check ,Flag} from "lucide-react";
import WindowControls from "#components/WindowControls.jsx";

const Terminal = () => {
    return <>
        <div id="window-header">
            <WindowControls target="terminal" />
            <h2>Tech Stack</h2>
        </div>
        <div className="techstack">
            <p>
                <span className="font-bold mr-2">
                    @prasanth%
                </span>
                  SHOW TECH STACK
            </p>
            <div className="label">
                <p className="w-32"> CATEGORY</p>
                <p>TECHNOLOGIES</p>
            </div>
            <ul className="content">
                {techStack.map(({category,items})=>(
                    <li key={category} className="flex items-center">
                        <Check className="check" size={20}/>
                        <h3>{category}</h3>
                        <ul>
                            {items.map((item,i)=>(
                                <li key={i}>{item} {i< items.length-1 ? ',' : ''}</li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
            <div className="footnote">
                <p>
                    <Check size={20}/> ALL DEPENDENCIES LOADED SUCCESSFULLY 100%
                </p>
                <p className="text-black">
                    <Flag size={15} fill="black"/>
                    Render time : 6ms
                </p>
            </div>
        </div>
    </>
}

//wrap in higher order window

const TerminalWindow = WindowWrapper(Terminal ,'terminal');
export default TerminalWindow;
