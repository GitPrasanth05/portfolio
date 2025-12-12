import React from 'react'
import {useRef} from "react";
import {Tooltip} from "react-tooltip";
import {dockApps} from "#constants/index.js";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";
const Dock = () => {
    const dockRef = useRef(null);
    const toggleApp=(app)=>{
    //open window
    }

    useGSAP(()=>{
        const dock = dockRef.current;
        if(!dock) return;

            const icons = dock.querySelectorAll(".dock-icon");
            const animatedIcons = (mouseX)=>{
                const {left}= dock.getBoundingClientRect();
                icons.forEach(icon=>{
                    const {left:l , width:w} = icon.getBoundingClientRect();
                    const center = l-left +w/2;
                    const distance =Math.abs(mouseX-center);
                    const intensity = Math.exp(-(distance **2.3)/20000);
                    gsap.to(icon, {
                        scale:1+0.25 *intensity,
                        y:-15*intensity,
                        duration : 0.2 ,
                        ease:"power1.out"
                    })
                })
            }
            const handleMouseMove = (e)=>{
                const {left}= dock.getBoundingClientRect();
                animatedIcons(e.clientX -left);
            }
            const handleMouseDown= ()=>{
                icons.forEach((icon)=>gsap.to(icon,{
                    scale:1,y:0,duration:0.4,ease:"power1.out",
                }))
            }
            dock.addEventListener("mousemove",handleMouseMove);
            dock.addEventListener("mouseup",handleMouseDown);

            return ()=>{
                dock.removeEventListener("mousemove",handleMouseMove);
                dock.removeEventListener("mouseup",handleMouseDown);
            }

    } ,[])


    return (
        <section id="dock">
            <div ref={dockRef} className="dock-container">
                {dockApps.map(({id, name , icon , canOpen}) => (
                    <div key={id } className="relative flex justify-center">
                        <button type="button" className="dock-icon" aria-label={name} data-tooltip-id="dock-tooltip"
                        data-tooltip-content={name}
                        data-tooltip-delay-show={100}
                        disabled={!canOpen}
                        onClick={()=>toggleApp({id,canOpen})}
                        >
                                <img src={`/images/${icon}`}
                                    alt={name}
                                     loading="lazy"
                                     className={canOpen ? "" : "opacity-55"}
                                />
                        </button>
                    </div>
                ))}
                <Tooltip id="dock-tooltip" place ="top" className="tooltip"/>
            </div>

        </section>
    )
}
export default Dock
