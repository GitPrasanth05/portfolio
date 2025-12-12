import React from 'react'
import {WindowControls} from '#components'
import {PanelLeft, ChevronLeft, ChevronRight, ShieldHalf, Search,MoveRight , Share ,Plus , Copy} from "lucide-react";
import WindowWrapper from '#higherorderComponent/WindowWrapper.jsx'
import {blogPosts} from "#constants/index.js";
const Safari = () => {
    return (
       <>
           <div id="window-header">
               <WindowControls target="safari" />
               <PanelLeft className="ml-10 icon text-black stroke-black"/>
               <div className="flex items-center gap-2 ml-5">
                   <ChevronLeft className="icon text-black stroke-black"/>
                   <ChevronRight className="icon text-black stroke-black"/>
               </div>
               <div className="flex-1 flex-center gap-3">
                   <ShieldHalf className="icon text-black stroke-black "/>

                   <div className="search">
                       <Search className="icon text-black stroke-black"/>
                       <input placeholder="Search or enter website name"
                       className="flex-1"
                       type="text"
                        />
                   </div>
                   <div className="flex items-center gap-4">
                       <Share className="icon text-black stroke-black icon-hover"/>
                       <Plus className="icon text-black stroke-black"/>
                       <Copy className="icon text-black stroke-black"/>

                   </div>
               </div>
           </div>
           <div className="blog">
               <h2>MY DEV</h2>
               <div className="space-y-8">
                   {blogPosts.map(({id,image,title,date,link})=>(
                       <div
                       key={id} className="blog-post"
                       >
                           <div className="col-span-2">
                               <img src={image} alt={title}/>
                           </div>
                           <div className="content">
                               <p>{date}</p>
                               <h3>{title}</h3>
                               <a href={link} target="_blank" rel="noopener noreferrer">CHECK OUT <MoveRight className="icon text-black stroke-black"/> </a>
                           </div>
                       </div>
                   ))}
               </div>
           </div>
       </>
    )
}
const SafariWindow= WindowWrapper(Safari,"safari")
export default SafariWindow
