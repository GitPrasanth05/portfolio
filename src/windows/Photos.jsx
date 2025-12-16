// import React from 'react'
// import {Mail , Search} from "lucide-react";
// import WindowWrapper  from "#higherorderComponent/WindowWrapper.jsx";
// import {WindowControls} from "#components/index.js";
// import {gallery,photosLinks} from "#constants/index.js";
// import useWindowStore from "#store/window.js";
// import windowWrapper from "#higherorderComponent/WindowWrapper.jsx";

// const Photos = () => {
//     const {openWindow} = useWindowStore();
//     return (
//         <>
//             <div id ="window-header">
//                 <WindowControls target={"photos"}/>
//                 <div className={"w-full flex justify-end items-center gap-3 text-gray-500"}>
//                     <Mail className="icon"/>
//                     <Search className={"icon"}/>
//                 </div>
//             </div>

//             <div className={"flex w-full"}>
//                 <div className={"sidebar"}>
//                     <h2> Photos</h2>
//                     <ul>
//                         {photosLinks.map(({id,icon,title})=>(
//                             <li key={id}>
//                                 <img src={icon} alt={title}/>
//                                 <p>{title}</p>
//                             </li>
//                         ))}
//                     </ul>
//                 </div>
//                 <div className={"gallery"}>
//                     <ul>
//                         {gallery.map(({id,img})=>(
//                             <li key={id} className={"hov"} onClick={()=> openWindow("imgfile",{id,name:"Gallery image",icon:"/images/image.png",kind:"file",fileType:"img",imageUrl:img})}>
//                                 <img src={img} alt={`Gallery image ${id}`} onClick={()=>{

//                                 }}/>
//                             </li>
//                         ))}
//                     </ul>
//                 </div>
//             </div>
//         </>
//     )
// }
// const PhotosWindow= windowWrapper(Photos,"photos")
// export default PhotosWindow

import React from "react";
import { Mail, Search } from "lucide-react";
import { Masonry } from "#components";
import { WindowControls } from "#components/index.js";
import { gallery, photosLinks } from "#constants/index.js";
import useWindowStore from "#store/window.js";
import windowWrapper from "#higherorderComponent/WindowWrapper.jsx";

const Photos = () => {
  const { openWindow } = useWindowStore();

  const masonryItems = gallery.map((item, index) => ({
    id: String(item.id),
    img: item.img,
    height: 300 + (index % 4) * 120,
  }));

  return (
    <>
      <div id="window-header">
        <WindowControls target={"photos"} />
        <div className=" flex justify-end items-center gap-3 text-gray-500">
          <Mail className="icon" />
          <Search className="icon" />
        </div>
      </div>

      <div className="flex w-full flex-1 min-h-0">
        <div className="sidebar">
          <h2>Photos</h2>
          <ul>
            {photosLinks.map(({ id, icon, title }) => (
              <li key={id}>
                <img src={icon} alt={title} />
                <p>{title}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="gallery">
          <Masonry
            items={masonryItems}
            animateFrom="bottom"
            blurToFocus
            scaleOnHover
            hoverScale={0.97}
            stagger={0.04}
            onItemClick={(item) =>
              openWindow("imgfile", {
                id: item.id,
                name: "Gallery Image",
                icon: "/images/image.png",
                kind: "file",
                fileType: "img",
                imageUrl: item.img,
              })
            }
          />
        </div>
      </div>
    </>
  );
};

const PhotosWindow = windowWrapper(Photos, "photos");
export default PhotosWindow;
